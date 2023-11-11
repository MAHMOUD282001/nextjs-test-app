import React from "react";

async function PostDetails({postId}) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  let post = await response.json();

  return (
    <div
      style={{
        marginTop: "20px",
        background: "#fff",
        color: "#000",
        borderRadius: "5px",
        padding: "10px",
        width: "70%",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
