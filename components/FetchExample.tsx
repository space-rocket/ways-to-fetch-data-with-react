import { useState, useEffect } from 'react'

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function FetchExample(): React.FC {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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