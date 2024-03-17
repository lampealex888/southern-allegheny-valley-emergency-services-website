import { Suspense } from "react";
import Loading from "@/components/loading";
import FullCalendar from "@/components/calendar/full-calendar";

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

export default async function Calendar() {
  const posts = backup_data.data.posts.nodes;
  // const posts = await getPosts();

  const events = posts.map((post: any) => {
    return {
      title: post.title,
      url: `/community-outreach${post.uri}`,
      start: new Date(post.event.startDateTime),
      end: new Date(post.event.startTime),
      address: post.event.location.streetAddress,
    };
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="text-base-content p-4 rounded-3xl w-full">
        <FullCalendar {...{ events }} />
      </div>
    </Suspense>
  );
}
