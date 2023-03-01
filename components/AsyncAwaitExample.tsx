import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function AsyncAwaitExample(): React.FC {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div>
        <p>An error occurred: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Async-Await Example</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}