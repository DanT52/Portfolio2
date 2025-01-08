import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import './markdownStyles.css';
export const BlogPost = () => {
  const { postName } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/DanT52/Portfolio2/main/posts/${postName}.md`
        );
        if (!response.ok) throw new Error('Post not found');
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [postName]);

  return (
    <div className="min-h-screen bg-background-100 dark:bg-background-900 text-text-900 dark:text-text-50 pt-10 pb-10 px-4">
      <div className="max-w-3xl mx-auto bg-background-50 dark:bg-background-700 rounded-lg shadow-lg p-6">
        <Link to="/" className="text-accent-600 dark:text-accent-300 hover:underline">
          &larr; Back
        </Link>
        <ReactMarkdown className="markdown-content mt-6 text-text-900 dark:text-text-100">
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};