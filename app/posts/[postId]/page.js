import PostDetails from "@/app/components/PostDetails";
import React, { Suspense } from "react";

async function PostDetailsPage({ params }) {
  let loadingJsx = <h3>Loading...</h3>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginTop: "20px" }}>Post Details</h1>

      <Suspense fallback={loadingJsx}>
        <PostDetails postId={params.postId} />
      </Suspense>
    </div>
  );
}

export default PostDetailsPage;
