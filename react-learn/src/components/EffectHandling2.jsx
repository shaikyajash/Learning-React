import React, { useEffect, useState } from "react";

const EffectHandling2 = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>First Post Title: </h1>
      
      <h2>{post.length > 0 ? post[0].title : <p>Loading...</p> }</h2>


    </div>
  );
};

export default EffectHandling2;
