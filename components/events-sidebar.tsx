import { Suspense } from "react";
import Loading from "@/components/loading";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const backup_data = {
  data: {
    posts: {
      nodes: [
        {
          title:
            "Southern Allegheny Valley Emergency Services Monthly Meeting Station 1",
          uri: "/southern-allegheny-valley-emergency-services-monthly-meeting-station-1-2/",
          event: {
            startDateTime: "2024-07-09T19:00:00+00:00",
            startTime: "2024-07-09T21:00:00+00:00",
            location: {
              streetAddress: "1611 Main Street, Pittsburgh, PA, USA",
            },
          },
        },
        {
          title:
            "Southern Allegheny Valley Emergency Services Month Meeting Station 2",
          uri: "/southern-allegheny-valley-emergency-services-month-meeting-station-2-2/",
          event: {
            startDateTime: "2024-06-11T19:00:00+00:00",
            startTime: "2024-06-11T21:00:00+00:00",
            location: {
              streetAddress: "1611 Main Street, Pittsburgh, PA, USA",
            },
          },
        },
        {
          title:
            "Southern Allegheny Valley Emergency Services Monthly Meeting Station 1",
          uri: "/southern-allegheny-valley-emergency-services-monthly-meeting-station-1/",
          event: {
            startDateTime: "2024-05-14T19:00:00+00:00",
            startTime: "2024-05-14T21:00:00+00:00",
            location: {
              streetAddress: "1611 Main Street, Pittsburgh, PA, USA",
            },
          },
        },
        {
          title:
            "Southern Allegheny Valley Emergency Services Month Meeting Station 2",
          uri: "/southern-allegheny-valley-emergency-services-month-meeting-station-2/",
          event: {
            startDateTime: "2024-04-09T19:00:00+00:00",
            startTime: "2024-04-09T21:00:00+00:00",
            location: {
              streetAddress: "1611 Main Street, Pittsburgh, PA, USA",
            },
          },
        },
        {
          title:
            "Annual Fish Fry – Sharpsburg Fire District | 1611 Main Street",
          uri: "/annual-fish-fry-sharpsburg-fire-district-1611-main-street/",
          event: {
            startDateTime: "2024-03-29T11:00:00+00:00",
            startTime: "2024-03-29T19:00:00+00:00",
            location: {
              streetAddress: "1611 Main Street Pittsburgh, PA, USA",
            },
          },
        },
      ],
    },
  },
};

// async function getPosts() {
//   const query = `
//   {
//     posts(where: {categoryName: "events"}) {
//       nodes {
//         title
//         uri
//         event {
//           startDateTime
//           startTime
//           location {
//             streetAddress
//           }
//         }
//       }
//     }
//   }
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

export default async function EventsSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let posts = backup_data.data.posts.nodes;
  // let posts = await getPosts();

  posts = posts.sort(
    (
      a: { event: { startDateTime: string } },
      b: { event: { startDateTime: any } }
    ) => a.event.startDateTime.localeCompare(b.event.startDateTime)
  );

  const slicedPosts = posts.slice(0, 5);

  return (
    <div className="flex flex-row mb-6 md:mb-0 gap-8">
      <div className="max-w-sm flex flex-col border justify-center p-6 tracking-tight gap-4 text-xl text-base-content rounded-lg">
        <h2 className="text-3xl"> Upcoming Events</h2>
        <Suspense fallback={<Loading />}>
          <div className="grid gap-6">
            {slicedPosts.map((post: any) => (
              <div
                key={post.uri}
                className="card border bg-accent text-accent-content shadow-xl"
              >
                <div className="card-body">
                  <Link href={`/community-outreach${post.uri}`}>
                    <h2 className="cart-title font-semibold link-hover">
                      {post.title}{" "}
                    </h2>
                  </Link>
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 fill-current mr-1.5"
                      >
                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                      </svg>
                      <span>
                        {format(
                          parseISO(post.event.startDateTime),
                          "MMMM d, yyyy"
                        )}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current mr-1.5"
                      >
                        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      <span>
                        {format(parseISO(post.event.startDateTime), "h:mm a")} -{" "}
                        {format(parseISO(post.event.startTime), "h:mm a")}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-4 h-4 fill-current mr-1.5"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      <span>{post.event.location.streetAddress}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
      {children}
    </div>
  );
}
