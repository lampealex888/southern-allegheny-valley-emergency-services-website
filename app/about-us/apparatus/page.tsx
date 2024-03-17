import Title from "@/components/title";
import Container from "@/components/container";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/loading";

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
                  "http://southern-allegheny-valley-emergency-services.local/wp-content/uploads/2024/03/01364086750.jpg",
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
                  "http://southern-allegheny-valley-emergency-services.local/wp-content/uploads/2024/03/01313447556.jpg",
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
                  "http://southern-allegheny-valley-emergency-services.local/wp-content/uploads/2024/03/01314490420.jpg",
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
                  "http://southern-allegheny-valley-emergency-services.local/wp-content/uploads/2024/03/01313446036.jpg",
              },
            },
          },
        },
      ],
    },
  },
};

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
  const posts =
    process.env.NODE_ENV === "development"
      ? backup_data.data.posts.nodes
      : await getPosts();

  return (
    <div className="bg-primary text-primary-content">
      <Title>Apparatus</Title>
      <Container>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col py-8 gap-8">
            {posts.map((post: any) => (
              <div
                key={post.uri}
                className="flex flex-col md:flex-row p-4 bg-base-100 text-base-content justify-center items-center gap-4 rounded-lg w-fit"
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
                    className="prose max-w-md"
                    dangerouslySetInnerHTML={{
                      __html: post.content.slice(0, 200) + "...",
                    }}
                  />
                  {process.env.NODE_ENV === "development" ? (
                    <Link
                      className="link-hover link-info"
                      href={`/about-us/apparatus/rescue-102`}
                    >
                      Click For Full Details
                    </Link>
                  ) : (
                    <Link
                      className="link-hover link-info"
                      href={`/about-us/apparatus/${post.uri}`}
                    >
                      Click For Full Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </Container>
    </div>
  );
}
