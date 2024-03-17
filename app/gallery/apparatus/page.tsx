/* eslint-disable @next/next/no-img-element */
import Title from "@/components/title";
import Container from "@/components/container";

const backup_data = {
  data: {
    posts: {
      nodes: [
        {
          title: "Squad 102",
          content:
            '\n<p>Squad 102 is a 2012 Ford F-350 4&#215;4 with custom aluminum body built by Keystone Fire Apparatus. It replaces our existing Special Operations Vehicle and will act as a Light Rescue/Wildland Interface/Support Vehicle. It has two-telescoping LED Flood Lights, carries a Hurst Combi-Tool and Portable Hydraulic Pump, high lift jacks, hand tools, air cutter, oil dry and additional cribbing. For Traffic Control it carries 12 28&#8243; traffic cones, Stop/Slow Paddles, portable &#8220;Accident Ahead&#8221; Sign and road flares. For Wildland fires it carries 500+ feet of 1&#8243; forestry line, 5 gallon soft Indian tank, &#8220;Pulaski&#8221; axes, shovels, brush rakes and brooms. Also on board are a portable Honda generator/light, submersible pumps with hose, fire extinguishers, small tools, and hand lights. It will soon replace Engine 1 as our second Quick Response Service (QRS) unit.</p>\n\n\n\n<p>This unit was placed into service on February 26, 2013 and is currently housed at Station 2.<a href="https://aspinwallvfd.org/awesome/2017/07/01364086750.jpg"></a></p>\n',
          uri: "/squad-102/",
          apparatus: {
            model: "Ford F-350 Custom Body",
            unit: "Squad 102",
            year: "2012",
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1516056584153-c85af1d8ab83?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
          },
        },
        {
          title: "Engine 102-2",
          content:
            '\n<p>1500 GPM Front Line Pumper with 500 gallon water tank, six person cab, generator, quartz scene lights, 35&#8242; and 14&#8242; ladders &amp; full compliment of hose, tools and equipment.</p>\n\n\n\n<p>This unit is currently housed in Station 2<a href="https://aspinwallvfd.org/awesome/2017/07/01313447556.jpg"></a></p>\n',
          uri: "/engine-102-2/",
          apparatus: {
            model: "HME - 4 Guys",
            unit: "Engine 102-2",
            year: "1997",
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1552244935-439697eea0bd?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
          },
        },
        {
          title: "Rescue 102",
          content:
            "\n<p>Five person commercial cab and chassis carrying Hurst Rescue system of Spreaders, Cutters and Rams, Cribbing, High-pressure Air Bags, Cascade System, PTO Generator, Para-Tech Struts, PFD&#8217;s, Initial Incident Rope Rescue Equipment, and 5 ton winch. This unit is QRS (Quick Response Service) certified.</p>\n\n\n\n<p>Currently housed at Station 1.</p>\n",
          uri: "/rescue-102/",
          apparatus: {
            model: "Kenco",
            unit: "Rescue 102",
            year: "2000",
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1622783089891-ddf18baab338?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
          },
        },
        {
          title: "Engine 102-1",
          content:
            "\n<p>1500 GPM Front Line Pumper with in-line Class A &amp; Class B foam system, 500 Gallon Water Tank, reservoirs for Class A and Class B foam , six person cab, electric generator and light tower, 24&#8242; and 14&#8242; ladders, RIT tools and a full compliment of hose, firefighting tools, appliances and equipment.</p>\n\n\n\n<p>This unit is currently housed at Station 1</p>\n",
          uri: "/engine-102-1/",
          apparatus: {
            model: "HMI-Toyne",
            unit: "Engine 102-1",
            year: "2006",
            image: {
              node: {
                mediaItemUrl:
                  "https://images.unsplash.com/photo-1600624697183-00566baf12e6?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
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
//     posts(where: {categoryName: "apparatus"}) {
//       nodes {
//         title
//         apparatus {
//           image {
//             node {
//               mediaItemUrl
//             }
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

export default async function ApparatusGallery() {
  const posts = backup_data.data.posts.nodes;
  // const posts = await getPosts();

  return (
    <div className="bg-base-300 text-base-content">
      <Title>Apparatus</Title>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
