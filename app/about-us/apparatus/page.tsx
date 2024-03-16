import Title from "@/components/title";
import Container from "@/components/container";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";
import Loading from "@/components/loading";


async function getPosts() {
  const query = `
  {
    posts(where: {categoryName: "apparatus"}) {
      nodes {
        title
        content
        uri
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
  }
  `;
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function Apparatus() {
  const posts = await getPosts();

  return (
    <div className="bg-primary text-primary-content">
      <Title>Apparatus</Title>
      <Container>
        <Sidebar>
          <Suspense fallback={<Loading />}>
            <div className="flex flex-col py-8 gap-8 mr-8">
              {posts.map((post: any) => (
                <div
                  key={post.uri}
                  className="flex flex-col md:flex-row p-4 bg-base-100 text-base-content justify-center items-center gap-4 rounded-lg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.apparatus.image.node.mediaItemUrl}
                    alt={post.title}
                    className="w-48 h-48 object-cover rounded-lg mr-4"
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl text-primary">{post.title}</h3>
                    <p className="text-neutral-content font-bold">
                      {post.apparatus.model + " - " + post.apparatus.year}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.slice(0, 200) + "...",
                      }}
                    />
                    <Link
                      className="link-hover link-info"
                      href={`/about-us/apparatus/${post.uri}`}
                    >
                      Click For Full Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Suspense>
        </Sidebar>
      </Container>
    </div>
  );
}
