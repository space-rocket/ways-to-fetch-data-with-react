import { useQuery } from 'react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function ReactQueryExample(): JSX.Element {

  const { isLoading, error, data } = useQuery<Post[]>('posts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    return json;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div>
      <h2>ReactQuery Example</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
