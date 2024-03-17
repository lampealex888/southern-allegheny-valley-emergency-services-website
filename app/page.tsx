/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      {/* Carousel 1 */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "text-base-content",
          } as React.CSSProperties
        }
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoHeight={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
        className=""
      >
        <SwiperSlide>
          <img
            className="max-w-7xl mx-auto w-full object-cover object-center max-h-[650px]"
            src="https://images.unsplash.com/photo-1563062067-d1d4e31a089e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="max-w-7xl mx-auto w-full object-cover object-center max-h-[650px]"
            src="https://plus.unsplash.com/premium_photo-1683133351425-a61570443654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="max-w-7xl mx-auto w-full object-cover object-center max-h-[650px]"
            src="https://images.unsplash.com/photo-1573632400288-4390dee9df40?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </SwiperSlide>
      </Swiper>
      {/* Banner 1 */}
      <div className="bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center py-16 px-4">
            <h2 className="text-3xl font-bold tracking-tight italic text-neutral mb-4">
              About Southern Allegheny Valley Emergency Services
            </h2>
            <div className="flex flex-col md:flex-row gap-10 max-w-full">
              <p className="text-lg max-w-lg tracking-tighter leading-relaxed">
                There are probably many perceptions of who we are. Many may
                think we are career firefighters and are paid to be ready to
                respond. Luckily, as fire prevention has worked to reduce the
                number of emergencies that we experience in our homes, very few
                residents are forced to call 911. There is a large portion of
                our community who see us at the Flea Market and other town
                events throughout the year, but are lucky enough to never see us
                during an emergency.
                <br /> <br />
                Know when the alarms sounds, whether it’s for a fire, smoke
                investigation, carbon monoxide alarm, motor vehicle accident or
                to pump out your basement, your 100% VOLUNTEER fire department
                members will continue to respond and make their personal
                sacrifices 24 hours a day, 365 days a year!
              </p>
              <div>
                <div className="text-lg leading-[3rem] flex flex-col mb-8">
                  <span className="font-bold">
                    So you may be asking yourself how I can help?
                  </span>
                  <span>
                    &gt; Will be put towards new equipment such as bunker gear,
                    SCBA (breathing apparatus), communications tools and
                    ultimately to a brand new Heavy Rescue{" "}
                  </span>
                  <span>
                    &gt; Consider donating 1/10 of 1% of your home value, 5% of
                    your monthy rent, or $1 per square foot of your buisness
                  </span>
                  <span>&gt; Make a difference today! Donate.</span>
                </div>
                <div className="flex items-center md:justify-around gap-4 text-nowrap flex-col md:flex-row">
                  <Link
                    href="/about"
                    className="btn btn-secondary w-full md:w-1/2 text-lg uppercase"
                  >
                    Read more about us
                  </Link>
                  <a
                    href="https://www.paypal.com/donate?token=wjfQLm43tIjTT1J3lF1c-abaHmU8Gq4Dco1DjRlKBga2Nt2jejhIKLzXks846O5J81IvUFuAtMGCuCdn"
                    className="btn btn-secondary w-full md:w-1/2 text-lg uppercase"
                  >
                    Make a donation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel 2 */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1642541400994-5bf3c9c0a8d9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="bg-base-100 bg-opacity-75 pb-16 min-h-[550px]">
          <h3 className="text-5xl text-center font-bold italic text-secondary pt-16 pb-8">
            Our Apparatus
          </h3>
          <Swiper
            style={
              {
                "--swiper-navigation-color": "text-base-content",
              } as React.CSSProperties
            }
            breakpoints={{
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            modules={[Navigation, Autoplay]}
            className="md:mx-8"
          >
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1561577050-c31b9a9ad754?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 1
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1633644363874-d59138061196?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 2
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1560878615-49d7c72df626?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 3
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1594072380487-f737a0648246?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 4
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1555276533-a3f3b70c9159?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 5
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1621209120264-0a3401fabab8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 6
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1608569569998-af1d304af73e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 7
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                <img
                  className="w-full object-cover object-center max-h-[300px]"
                  src="https://images.unsplash.com/photo-1562457346-ac8bb5cfea88?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                  Slide 8
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Banner 2 */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1563062067-7700e1d9ae1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="bg-base-content bg-opacity-75 min-h-[400px] text-base-100 p-4">
          <h3 className="text-5xl text-center font-bold italic md:py-16 tracking-tighter">
            South Allegheny Vally Volunteer Emergency Services Members
          </h3>
          <p className="text-center md:mx-8 font-bold text-lg tracking-tighter mb-4">
            Our Department is 100% VOLUNTEER. We have existed for over 125 years
            serving the Borough of Aspinwall and surrounding communities. Our
            members work in the community, own businesses and are you neighbors.
            One of the thing all of these members have in common is the belief
            in our community and giving back to it. Many members are not only
            volunteer firefighters, but also members of other service
            organizations. You may know some of them through your affiliations
            with these organizations.
          </p>
          <Link
            href="/about-us/our-members"
            className="btn btn-secondary text-xl uppercase flex w-full md:w-1/4 mx-auto"
          >
            {" "}
            Meet our members
          </Link>
        </div>
      </div>
      {/* Banner 3 */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1531431199010-1f9985f83baa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <div className="bg-base-100 bg-opacity-75 min-h-[280px] md:min-h-[350px] text-secondary">
          <div className="flex flex-row justify-center min-h-[280px] md:min-h-[350px] items-center mx-16">
            <Link
              href="/fire-prevention"
              className="flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 512"
                className="h-24 w-24 fill-secondary my-8"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
              <span className="text-2xl md:text-5xl font-bold italic min-h-[140px] md:min-h-[140px]">
                Safety Tips
              </span>
            </Link>
            <div className="border-l-2 md:border-l-4 border-base-content min-h-[120px] md:min-h-[200px] mx-16 md:mx-24"></div>
            <Link href="/gallery/videos" className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-24 w-24 fill-secondary my-8"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
              <span className="text-2xl md:text-5xl font-bold italic min-h-[140px] md:min-h-[140px]">
                View our videos
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
