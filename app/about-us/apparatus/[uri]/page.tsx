import Title from "@/components/title";
import Container from "@/components/container";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";
import Loading from "@/components/loading";

async function getPost(uri: any) {
  const query = `
  query GetPostByUri($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
      apparatus {
        model
        unit
        year
        image {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  `;

  const variables = {
    uri,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.post) {
    return responseBody.data.post;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

export default async function PostDetails({ params }: any) {
  const post = await getPost(params.uri);

  return (
    <div className="bg-primary text-primary-content">
      <Suspense fallback={<Loading />}>
        <Title>{post.title}</Title>
        <Container>
          <Sidebar>
            <div className="flex flex-col py-8 gap-4 mr-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.apparatus.image.node.mediaItemUrl}
                alt={post.title}
                className="w-3/4 object-cover rounded-lg shadow-lg flex mx-auto"
              />
              <span className="text-3xl">
                <span className="font-bold">Unit:</span> {post.apparatus.unit}
              </span>
              <span className="text-3xl">
                <span className="font-bold">Year:</span> {post.apparatus.year}
              </span>
              <span className="text-3xl">
                <span className="font-bold">Model:</span> {post.apparatus.model}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
                className="w-3/4 leading-tight prose prose-xl text-primary-content"
              />

              <Link className="text-3xl link-hover" href="/about-us/apparatus">
                ← Back to Apparatus
              </Link>
            </div>
          </Sidebar>
        </Container>
      </Suspense>
    </div>
  );
}
