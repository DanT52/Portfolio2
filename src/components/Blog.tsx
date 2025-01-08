import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { useFetchBlogPosts } from '../hooks/useFetchBlogPosts';

export const Blog = () => {
  const posts = useFetchBlogPosts();
  //console.log(posts)
  //const posts = [{name: 'post1.md', content: '# How to write a blog'}]
  const [ref, controls] = useScrollAnimation();

  return (
    <section
      id="blog"
      ref={ref}
      className="pt-20 pb-20 bg-background-100 dark:bg-background-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-text-900 dark:text-text-50 text-center">
            Blog
          </h2>

          {/* If posts are still being fetched, show a loading placeholder */}
          {!posts.length ? (
            <div className="flex justify-center">
              <div className="text-text-900 dark:text-text-50">Loading...</div>
            </div>
          ) : (
            // Once posts are loaded, map over them, each with its own animation
            <div className="space-y-8 flex flex-col items-center">
              {posts.map((post, index) => (
                <motion.div
                  key={post.name}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2 },
                    },
                  }}
                  className="bg-background-50 dark:bg-background-700 rounded-lg shadow-lg p-6 max-w-lg w-full"
                >
                  <Link
                    to={`/blog/${post.name.replace('.md', '')}`}
                    className="block hover:underline"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-text-900 dark:text-text-50 text-center">
                      {post.name.replace('.md', '')}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};