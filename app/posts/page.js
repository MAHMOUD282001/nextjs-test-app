import Link from "next/link";

export const metadata = {
  title: "Posts Page",
};

async function PostsPage() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  let posts = await response.json();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginTop: "20px" }}>Posts</h1>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginTop: "20px",
              background: "#fff",
              color: "#000",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
          >
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
