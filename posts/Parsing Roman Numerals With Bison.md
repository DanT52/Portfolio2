## Parsing Roman Numerals

One of the most interesting challenges in programming language theory and compiler design is to parse and interpret strings in a structured way. In this post, I’ll show you how I built a small project that parses Roman numerals, constructs an Abstract Syntax Tree (AST), and evaluates them to their integer values.

Roman numerals provide a demonstration of the entire compiler pipeline:
- **Lexing** scans for tokens.
- **Parsing** enforces structure with a grammar (including subtractive rules).
- **AST Construction** organizes data into a tree.
- **Evaluation** sums up the result.

---

### Why Roman Numerals?

Roman numerals have a long history, dating back thousands of years. They rely on letters (I, V, X, L, C, D, M) that can be combined to represent numbers. Unlike decimal notation, Roman numerals have special “subtractive” rules—like IV representing 4, or IX for 9—and limited repetition rules for each symbol. This makes them a neat example for a parsing exercise because:

1. They have a relatively small set of terminals (M, D, C, L, X, V, I).
2. They use both additive (VI = 6, XV = 15) and subtractive (IV = 4, IX = 9) notation.
3. They have rules limiting how many times a certain character can repeat (e.g., “IIII” is invalid).

---

### High-Level Overview

1. **Define a Grammar**: I started by writing down how Roman numerals are formed (e.g., thousands place, hundreds place, tens place, ones place). In compiler terms, this grammar is a set of production rules that say how each part of a Roman numeral can be expanded into smaller pieces (terminals).

2. **Lexical Analysis (Lex)**: We create a lexer (`lexer.l`) to read the input string and split it into tokens (e.g., M, D, C, etc.). It ignores whitespace and rejects invalid characters.

3. **Parsing (Yacc / Bison)**: Next, the parser (`parser.y`) consumes the tokens produced by the lexer according to the grammar. If the parser finds a sequence of tokens that doesn’t conform to the grammar, we report an error (e.g., invalid Roman numeral).

4. **AST Construction**: Rather than just returning an integer straightaway, my parser builds an Abstract Syntax Tree (AST). Each node in this tree contains a value (like 1000 for 'M') or references to child nodes. This tree represents the structure of the numeral as parsed.

5. **AST Evaluation**: Finally, we traverse the AST (in a post-order manner) and evaluate the sum of the node values. By carefully handling subtractive rules in the grammar, we effectively add or subtract values to get the correct integer.

---

### The Grammar Rules

```
calculation → roman

roman → thousand hundred ten digit

thousand → M | MM | MMM | ε

hundred → iHundred | C D | D iHundred | C M

iHundred → C | CC | CCC | ε

ten → iTen | X L | L iTen | X C

iTen → X | XX | XXX | ε

digit → iDigit | I V | V iDigit | I X

iDigit → I | II | III | ε
```

- `ε` (epsilon) means “empty” (i.e., that nonterminal can sometimes be nothing, for example, 0 in the thousands place).

This grammar directly encodes the typical rules of Roman numerals:
- Up to three M’s in a row (M, MM, MMM) for thousands place.
- Special subtractive combinations like CM (900), CD (400), XC (90), XL (40), IX (9), IV (4).
- Not allowing invalid sequences like “VX” or “IC.”
---

### Lexical Analysis

The `lexar.l` file for this project was quite simple as we are just matching single characters as tokens.

```c
"M"   { return M; }
"D"   { return D; }
"C"   { return C; }
"L"   { return L; }
"X"   { return X; }
"V"   { return V; }
"I"   { return I; }
[ \t\n]+    { /* skip spaces */ }
.     { yyerror("Invalid character"); }
```

- Any invalid character triggers an error.  
- Whitespace is simply ignored.

---

### Parsing and Building the AST

In the `parser.y` file, I combine the grammar rules with actions that build our AST. Each symbol or production maps to a function call that creates either a node or a leaf in the AST. Here’s a snippet for the `roman` production:

```c
roman
    : thousand hundred ten digit
        {
            $$ = create(
                create($1, $2),
                create($3, $4)
            );
        }
    ;
```

- `create(ast *left, ast *right)` returns a new AST node whose `left` and `right` pointers reference subtrees, and whose own `value` is set to 0 (non-leaf nodes).
- `value(int val)` returns an AST node with no children and a numeric `value`.

For each part of the grammar—thousands, hundreds, tens, digits—we either produce a leaf node (with a numeric value like 100, 900, etc.) or create new subtrees.

---

### A Sample Parse Tree

Let’s visualize the parse tree for a typical numeral. Suppose we parse **“MMCMVIII”** (which is 2908).

1. **thousand**: `MM` → 2000  
2. **hundred**: `CM` → 900  
3. **ten**: `` → 0  
4. **digit**: `V` → 5
5. **iDigit**: `III` → 3

So we get something like this high-level AST structure:

![Parse Tree for MMCMVIII](https://i.imgur.com/bDH6Lub.png)

When we traverse the tree, the digits get added and form 8, then the rest of the elements are combined and we get the result.

---

### AST Evaluation

The AST evaluation logic is in `expr.c`. Conceptually, it looks like this:

```c
int evaluate(ast *root) {
    if (!root) return 0;
    // Leaf node
    if (!root->left && !root->right) return root->value;
    
    // Otherwise, recursively evaluate children 
    int left_val = evaluate(root->left);
    int right_val = evaluate(root->right);
    return left_val + right_val; 
}
```

Since each node is either a leaf with a numeric value or an internal node summing its children, this additive approach naturally reflects Roman numeral addition (accounting for those subtractive combos baked into the grammar).

---

### Error Handling and Testing

- **Unit Testing**: I created unit tests in python too ensure that the program was opperating correctly and recognizing any errors. Any invalid token or invalid combination that the grammar cannot parse triggers an `yyerror`. For instance, “VX” or “IC” will produce an error immediately.

```python
def test_valid_roman_numerals(self):
    test_cases = {
        'I': '1',
        'IV': '4',
        'IX': '9',
        ...
        'MMMCMXCIX': '3999'
    }
    ...
```
---



### Connecting It to a Web Front-End

I’ve also exposed this Roman numeral converter as an **AWS Lambda** function behind an **API Gateway**, and created a simple **HTML + JavaScript** frontend. When a user enters a Roman numeral, the frontend makes a POST request to the Lambda function, which runs the compiled C code, captures its output, and returns the integer. This means the same parser we wrote in C is now part of a serverless API.

![Screenshot of the Roman Numeral Converter](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3h5NTNrcWR3cGd3dGRyY2UxamJubHc2N3pxYXpuaDlmanprdGI2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bvZfTixbRwIJxzVZ8m/giphy.gif)

You can test it live at [Roman Numeral Converter](https://dant52.github.io/romanNumeralConverter/).  
---

