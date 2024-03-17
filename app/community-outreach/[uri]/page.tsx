import Container from "@/components/container";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { format, parseISO } from "date-fns";

const backup_data = {
  data: {
    post: {
      title:
        "Southern Allegheny Valley Emergency Services Monthly Meeting Station 1",
      event: {
        startDateTime: "2024-07-09T19:00:00+00:00",
        startTime: "2024-07-09T21:00:00+00:00",
        location: {
          streetAddress: "1611 Main Street, Pittsburgh, PA, USA",
        },
      },
    },
  },
};

// async function getPost(uri: any) {
//   const query = `
//   query GetPostByUri($uri: ID!) {
//     post(id: $uri, idType: URI) {
//       title
//       event {
//         startDateTime
//         startTime
//         location {
//           streetAddress
//         }
//       }
//     }
//   }
//   `;

//   const variables = {
//     uri,
//   };

//   const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     next: {
//       revalidate: 60,
//     },
//     body: JSON.stringify({ query, variables }),
//   });

//   const responseBody = await res.json();

//   if (responseBody && responseBody.data && responseBody.data.post) {
//     return responseBody.data.post;
//   } else {
//     throw new Error("Failed to fetch the post");
//   }
// }

export default async function PostDetails({ params }: any) {
  const post = backup_data.data.post;
  // const post = await getPost(params.uri);

  return (
    <div className="bg-accent text-accent-content">
      <Suspense fallback={<Loading />}>
        <Container>
          <div className="mb-8">
            <div className="py-12 md:py-16 xl:py-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {post.title}
              </h1>
            </div>
            <section>
              <div className="space-y-2">
                <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                  Date and Time
                </h2>
                <div className="flex items-center space-x-2 text-xl sm:text-2xl lg:text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 h-6"
                  >
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                  </svg>
                  <span>
                    {format(parseISO(post.event.startDateTime), "MMMM d, yyyy")}
                    , {format(parseISO(post.event.startDateTime), "h:mm a")} -{" "}
                    {format(parseISO(post.event.startTime), "h:mm a")}
                  </span>
                </div>
              </div>
            </section>
            <section className="my-8">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Location
                </h2>
                <div className="flex items-center space-x-2 text-xl sm:text-2xl lg:text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-6 h-6"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <address>{post.event.location.streetAddress}</address>
                </div>
              </div>
            </section>
            <section className="my-8">
              <iframe
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                }&q=${post.event.location.streetAddress.replace(/ /g, "+")}`}
              ></iframe>
            </section>
            <Link
              className="text-2xl sm:text-3xl lg:text-4xl link-hover"
              href="/community-outreach/calendar"
            >
              ← Back to Calendar
            </Link>
          </div>
        </Container>
      </Suspense>
    </div>
  );
}
