import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then((response) => response.json()) 
      .then((data) => {
        setPosts(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Ошибка загрузки постов:", error);
        setLoading(false);
      });
  }, []); 
  return (
    <div>
      <h2>Список постов</h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {posts.slice(0, 10).map((post) => ( 
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;