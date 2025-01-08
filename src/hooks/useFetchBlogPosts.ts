
import { useState, useEffect } from 'react';

export const useFetchBlogPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/DanT52/Portfolio2/contents/posts");
        const files = await response.json();
        const blogPosts = await Promise.all(
          files.map(async (file: any) => {
            const postResponse = await fetch(file.download_url);
            const content = await postResponse.text();
            return { name: file.name, content };
          })
        );
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return posts;
};