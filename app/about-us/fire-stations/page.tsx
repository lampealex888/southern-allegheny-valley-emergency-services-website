import Title from "@/components/title";
import Container from "@/components/container";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/loading";
import InfoSidebar from "@/components/info-sidebar";

const backup_data = {
  data: {
    posts: {
      nodes: [
        {
          title: "Sharpsburg Vol. Fire Dept. ",
          content:
            "\n<p>The Sharpsburg Volunteer Fire Department, Allegheny County Station 265, is located about 5 miles northeast of Pittsburgh, along the Allegheny River. The Department provides fire protection for the borough of Sharpsburg and surrounding municipalities</p>\n",
          uri: "/sharpsburg-vol-fire-dept/",
          fireStation: {
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1518199057741-27f927456457?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
            email: "Sharpsburgvfd@yahoo.com",
            location: {
              streetAddress: "1611 Main St, Sharpsburg, PA, United States",
            },
            phoneNumber: 4127811116,
          },
        },
        {
          title: "Aspinwall VFD",
          content:
            "\n<p>The Aspinwall Fire District Station 102-2 is part of the Southern Allegheny Valley Emergency Services</p>\n",
          uri: "/aspinwall-vfd/",
          fireStation: {
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1600622269746-258d4124170a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
            email: "aspinwallvfd@gmail.com",
            location: {
              streetAddress: "217 Commercial Avenue, Aspinwall, PA, USA",
            },
            phoneNumber: 4127810447,
          },
        },
        {
          title:
            "Southern Allegheny Valley Emergency Services (SAVES) Station 102-1",
          content:
            "\n<p>Created in 1871, the Sharpsburg Volunteer Fire Department provides fire protection and protects the life and property for the Borough of Sharpsburg in addition to providing mutual aid to the surrounding communities.</p>\n",
          uri: "/southern-allegheny-valley-emergency-services-saves-station-102-1/",
          fireStation: {
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1629559618578-ec27c972a9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
            email: "aspinwallvfd@gmail.com",
            location: {
              streetAddress: "1611 Main St, Pittsburgh, PA 15215, USA",
            },
            phoneNumber: 4127811116,
          },
        },
      ],
    },
  },
};

// async function getPosts() {
//   const query = `
// {
//   posts(where: {categoryName: "fire-stations"}) {
//     nodes {
//       title
//       content
//       uri
//       fireStation {
//         image {
//           node {
//             mediaItemUrl
//           }
//         }
//         email
//         location {
//           streetAddress
//         }
//         phoneNumber
//       }
//     }
//   }
// }
//   `;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
//       query
//     )}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // ... any other headers you need to include (like authentication tokens)
//       },
//       cache: "no-store",
//     }
//   );

//   const { data } = await res.json();

//   return data.posts.nodes;
// }

export default async function Apparatus() {
  const posts = backup_data.data.posts.nodes;
  // const posts = await getPosts();

  return (
    <div className="bg-primary text-primary-content">
      <Title>Fire Stations</Title>
      <Container>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0 gap-8 min-h-screen my-8">
            <InfoSidebar />
            <div className="flex flex-col gap-8 md:mb-8">
              {posts.map((post: any) => (
                <div
                  key={post.uri}
                  className="flex flex-col xl:flex-row p-4 bg-base-100 text-base-content justify-start items-center gap-4 rounded-lg w-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.fireStation.image.node.mediaItemUrl}
                    alt={post.title}
                    className="w-48 lg:w-80 h-full max-h-80 object-cover rounded-lg mr-4"
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl text-primary">{post.title}</h3>
                    <p className="text-neutral-content">
                      {post.fireStation.location.streetAddress}
                    </p>
                    <a
                      className="text-neutral-content link-hover"
                      href={`tel:${post.fireStation.phoneNumber
                        .toString()
                        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`}
                    >
                      {post.fireStation.phoneNumber
                        .toString()
                        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                    </a>
                    <a
                      className="text-neutral-content link-hover"
                      href={`mailto:${post.fireStation.email.toLowerCase()}`}
                    >
                      {post.fireStation.email.toLowerCase()}
                    </a>
                    <div
                      className="prose"
                      dangerouslySetInnerHTML={{
                        __html: post.content,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Suspense>
      </Container>
    </div>
  );
}
