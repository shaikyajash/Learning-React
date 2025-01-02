import React from "react";
import useFetch from "./useFetch";

const Usinghook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default Usinghook;
