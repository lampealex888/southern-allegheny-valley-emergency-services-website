/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Title from "@/components/title";
import Container from "@/components/container";
import Link from "next/link";

export default function Recruitment() {
  return (
    <div className="bg-success text-success-content">
      <div className="grid grid-rows-[auto 1fr auto] gap-8 min-h-screen pb-8">
        <div className="relative overflow-hidden">
          <img
            alt="Hero"
            className="object-cover w-full h-[400px]"
            height="400"
            src="https://images.unsplash.com/photo-1638401607292-ba5ca538031e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "1440/400",
              objectFit: "cover",
            }}
            width="1440"
          />
          <div className="inset-0 w-full absolute top-0 grid items-center justify-center bg-base-100 bg-opacity-75">
            <div className="px-4 grid gap-4">
              <h1 className="text-4xl font-extrabold tracking-tight leading-[1.3] text-white">
                Join Our Team
              </h1>
              <p className="text-xl text-white">
                Experience the pride of serving your community.
              </p>
            </div>
          </div>
        </div>
        <Container>
          <section className="px-4 grid gap-12">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Why Join the Fire Department?
              </h2>
              <p className="text-gray-500">
                We offer a rewarding career with opportunities for growth and
                advancement.
              </p>
            </div>
            <div className="grid gap-8">
              <div className="grid gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Community Impact
                </h3>
                <p className="text-gray-500">
                  Make a difference in the lives of others by protecting and
                  serving your community.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Professional Development
                </h3>
                <p className="text-gray-500">
                  Continuous training and skill development to help you excel in
                  your role.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Team Camaraderie
                </h3>
                <p className="text-gray-500">
                  Join a close-knit team that supports each other in
                  high-pressure situations.
                </p>
              </div>
            </div>
          </section>
          <section className="px-4 py-12">
            <div className="container px-4 grid gap-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Testimonials
              </h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="80"
                      src="https://images.unsplash.com/photo-1638401607229-31dbd79b5b37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <div className="grid gap-0.5">
                      <h3 className="text-2xl font-bold tracking-tight">
                        Samantha Hayes
                      </h3>
                      <p className="text-gray-500">Firefighter</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-500 text-base leading-loose pl-12 border-l border-gray-200">
                    "Working as a firefighter has been incredibly rewarding. I'm
                    proud to be part of a team that makes a real difference in
                    people's lives. Every day brings new challenges, but we face
                    them together, and that's what makes this job so special."
                  </blockquote>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="80"
                      src="https://images.unsplash.com/photo-1614771327105-16224a129756?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <div className="grid gap-0.5">
                      <h3 className="text-2xl font-bold tracking-tight">
                        Carlos Ramirez
                      </h3>
                      <p className="text-gray-500">Firefighter</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-500 text-base leading-loose pl-12 border-l border-gray-200">
                    "The sense of camaraderie in the department is unmatched. We
                    train together, laugh together, and support each other like
                    family. Knowing that we're always ready to respond and help
                    those in need is what drives us every day."
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
          <div className="px-4">
            <div className="container grid gap-4">
              <div className="grid gap-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Ready to Apply?
                </h2>
                <p className="text-gray-500">
                  Take the first step towards an exciting and meaningful career
                  in emergency services.
                </p>
                <a href="mailto:aspinwallvfd@gmail.com" className="btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
