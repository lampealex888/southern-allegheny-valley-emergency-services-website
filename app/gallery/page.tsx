/* eslint-disable @next/next/no-img-element */
import Title from "@/components/title";
import Container from "@/components/container";
const backup_data = {
  data: {
    mediaItems: {
      nodes: [
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1552244935-439697eea0bd?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1593009902681-60872a76e8e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1553227960-74b87364b7ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1622783089891-ddf18baab338?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1586470202424-a6f766679b45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1573632400288-4390dee9df40?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1596363508791-935322c939a8?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1600624697183-00566baf12e6?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://plus.unsplash.com/premium_photo-1661854958665-852322866b8e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          mediaItemUrl:
            "https://images.unsplash.com/photo-1590674868122-aa376e46c464?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  },
};

// async function getPosts() {
//   const query = `
//   {
//     mediaItems {
//       nodes {
//         mediaItemUrl
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

//   return data.mediaItems.nodes;
// }

export default async function Gallery() {
  const posts = backup_data.data.mediaItems.nodes;
  // const posts = await getPosts();

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledUrls = shuffleArray([...posts]);

  // Function to chunk the array into equal parts
  const chunkArray = (arr: any, size: any) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="bg-base-300 text-base-content">
      <Title>Gallery</Title>
      <Container>
        <div className="hidden md:grid md:grid-cols-3 gap-4 my-8">
          {chunkArray(shuffledUrls, Math.floor(shuffledUrls.length / 3)).map(
            (columnUrls: any, columnIndex: any) => (
              <div key={columnIndex} className="grid gap-4 align-top">
                {/* Render images for each column */}
                {columnUrls.map((url: any, index: any) => (
                  <img
                    key={index}
                    className="h-auto max-w-full rounded-lg"
                    src={url.mediaItemUrl}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </div>
            )
          )}
        </div>
        <div className="grid grid-cols-2 md:hidden gap-4 my-8">
          {chunkArray(shuffledUrls, Math.floor(shuffledUrls.length / 2)).map(
            (columnUrls: any, columnIndex: any) => (
              <div key={columnIndex} className="grid gap-4 align-top">
                {/* Render images for each column */}
                {columnUrls.map((url: any, index: any) => (
                  <img
                    key={index}
                    className="h-auto max-w-full rounded-lg"
                    src={url.mediaItemUrl}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
