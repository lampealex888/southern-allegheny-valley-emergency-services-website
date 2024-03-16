import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";
import Loading from "@/components/loading";

async function getPost() {
  const query = `
  query GetPostByUri {
    post(id: "/fire-safety/", idType: URI) {
      title
      content
    }
  }
  `;

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.post) {
    return responseBody.data.post;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

export default async function FirePrevention() {
  const post = await getPost();

  return (
    <div className="bg-secondary text-secondary-content">
      <Title>Fire Prevention</Title>
      <Container>
        <Sidebar>
          <Suspense fallback={<Loading />}>
            <div
              className="prose-lg text-primary-content my-8 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </Suspense>
        </Sidebar>
      </Container>
    </div>
  );
}
