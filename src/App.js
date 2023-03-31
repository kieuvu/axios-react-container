import "./styles.css";
import { useState } from "react";
import { fetchPost } from "./request";

export default function App() {
  const [postId, setPostId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPostHandler = async () => {
    setIsLoading(true);
    const post = await fetchPost(postId);
    setIsLoading(false);
    setPosts((prev) => [...prev, post]);
    setPostId((prev) => prev + 1);
  };

  return (
    <div className="App">
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {isLoading && <p>loading ...</p>}
      <button onClick={fetchPostHandler}>fetch next post</button>
    </div>
  );
}
