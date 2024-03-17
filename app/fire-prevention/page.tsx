import Title from "@/components/title";
import Container from "@/components/container";
import { Suspense } from "react";
import Loading from "@/components/loading";

const backup_data = {
  data: {
    post: {
      title: "Fire Prevention",
      content:
        '\n<h1 class="wp-block-heading">Lorem Ipsum</h1>\n\n\n\n<p><em>Lorem ipsum</em> dolor sit amet, consectetur adipiscing elit. Sed <strong>pellentesque</strong> libero vitae velit rutrum, id commodo mauris porta. Nullam et purus in purus sollicitudin ultrices.</p>\n\n\n\n<h2 class="wp-block-heading">Fusce Mauris Nisl</h2>\n\n\n\n<p>Fusce mauris nisl, sagittis eu turpis ac, aliquet interdum nisi. Ut eget <a href="https://www.example.com"><em>condimentum</em></a> nisi. Aenean ultrices convallis nulla nec eleifend.</p>\n\n\n\n<h3 class="wp-block-heading">Curabitur Fringilla</h3>\n\n\n\n<p>Curabitur fringilla odio a nibh malesuada, sed ullamcorper sapien vehicula. Sed nec sapien nec sapien maximus vulputate nec ac ex.</p>\n\n\n\n<ul>\n<li>Donec eget est nec odio tempor ullamcorper.</li>\n\n\n\n<li>Mauris ac enim non eros consequat aliquet.</li>\n\n\n\n<li>Nam nec dui fermentum, luctus nisl sit amet, fermentum turpis.</li>\n</ul>\n\n\n\n<h4 class="wp-block-heading">Phasellus Justo</h4>\n\n\n\n<p>Phasellus justo magna, consectetur nec volutpat vitae, aliquam nec arcu. Nam vehicula turpis sit amet tellus elementum, id volutpat nisi venenatis.</p>\n\n\n\n<ol>\n<li>Morbi sodales sapien a ex facilisis, et volutpat sem convallis.</li>\n\n\n\n<li>Aliquam eget odio ut quam varius convallis.</li>\n\n\n\n<li>Vestibulum at metus nec enim finibus sagittis.</li>\n</ol>\n\n\n\n<h5 class="wp-block-heading">Integer Consectetur</h5>\n\n\n\n<p>Integer consectetur odio ut nisi lacinia, ut ultrices ex eleifend. Duis lobortis metus eget arcu commodo, vel fermentum mauris viverra.</p>\n\n\n\n<h6 class="wp-block-heading">In Ut Eros</h6>\n\n\n\n<p>In ut eros ac eros tincidunt vulputate vitae nec est. Nam fringilla urna eget felis posuere, sit amet faucibus ligula dapibus.</p>\n',
    },
  },
  extensions: {
    debug: [],
    queryAnalyzer: {
      keys: "1a73005adca47afd7e33ddd58e99e4cc881afde3f5579e2a962920162a90a322 graphql:Query operation:GetPostByUri cG9zdDo1Mg==",
      keysLength: 114,
      keysCount: 4,
      skippedKeys: "",
      skippedKeysSize: 0,
      skippedKeysCount: 0,
      skippedTypes: [],
    },
  },
};

// async function getPost() {
//   const query = `
//   query GetPostByUri {
//     post(id: "/fire-safety/", idType: URI) {
//       title
//       content
//     }
//   }
//   `;

//   const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     next: {
//       revalidate: 60,
//     },
//     body: JSON.stringify({ query }),
//   });

//   const responseBody = await res.json();

//   if (responseBody && responseBody.data && responseBody.data.post) {
//     return responseBody.data.post;
//   } else {
//     throw new Error("Failed to fetch the post");
//   }
// }

export default async function FirePrevention() {
  // const post = await getPost();
  const post = backup_data.data.post;

  return (
    <div className="bg-primary text-primary-content">
      <Suspense fallback={<Loading />}>
        <Title>{post.title}</Title>
        <Container>
          <div
            className="prose-lg text-primary-content my-8 max-w-3xl"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </Container>
      </Suspense>
    </div>
  );
}
