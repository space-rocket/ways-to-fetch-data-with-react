import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export function UseFetchExample(url: string): Post[] {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return data;
}