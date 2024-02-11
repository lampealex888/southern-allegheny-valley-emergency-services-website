"use client";

import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      {/* Carousel 1 */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#000",
          } as React.CSSProperties
        }
        slidesPerView={1}
        loop={true}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            className="max-w-7xl mx-auto w-full"
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="max-w-7xl mx-auto w-full"
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="max-w-7xl mx-auto w-full"
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          ></img>
        </SwiperSlide>
      </Swiper>
      {/* Banner 1 */}
      <div className="bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center py-16">
            <h2 className="text-[2.75rem] font-bold tracking-tight italic text-neutral mb-4 text-nowrap">
              About Southern Allegheny Valley Emergency Services
            </h2>
            <div className="flex flex-row gap-10">
              <p className="text-xl max-w-sm tracking-tighter leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                tortor quis nulla rutrum laoreet vel id sem. Curabitur imperdiet
                finibus velit, in bibendum erat rutrum et. Praesent consectetur
                rutrum malesuada.
                <br /> <br />
                Aenean aliquam, eros ut gravida placerat, mi quam dignissim
                turpis, at placerat turpis arcu non nisl. Aenean varius libero
                vel varius consequat. Morbi sed nibh sed erat suscipit sodales.
                Vestibulum vel ultricies augue. Etiam imperdiet a metus id
                congue.
              </p>
              <div>
                <div className="text-xl leading-[3rem] flex flex-col mb-8">
                  <span>
                    &gt; Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </span>
                  <span>
                    &gt; Duis id tortor quis nulla rutrum laoreet vel id sem.{" "}
                  </span>
                  <span>
                    &gt; Curabitur imperdiet finibus velit, in bibendum erat
                    rutrum et.
                  </span>
                </div>
                <div className="flex justify-around gap-4 text-nowrap">
                  <Link
                    href="/about"
                    className="btn btn-secondary w-1/2 text-xl uppercase"
                  >
                    Read more about us
                  </Link>
                  <a
                    href="donate"
                    className="btn btn-secondary w-1/2 text-xl uppercase"
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
            "url(https://swiperjs.com/demos/images/nature-10.jpg)",
        }}
      >
        <div className="bg-base-100 bg-opacity-75">
          <h3 className="text-5xl text-center font-bold italic text-secondary pt-16 pb-8">
            Our Apparatus
          </h3>
          <div className="xl:mx-8">
            <Swiper
              style={
                {
                  "--swiper-navigation-color": "#000",
                } as React.CSSProperties
              }
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={4}
              loop={true}
              navigation={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              modules={[Navigation]}
              className="min-h-[550px]"
            >
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 1
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 2
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 3
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 4
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 5
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 6
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 7
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    className="w-full object-cover"
                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                  ></img>
                  <span className="bg-base-100 flex text-2xl font-bold text-secondary p-2">
                    Slide 8
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
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
        <h3 className="text-5xl text-center font-bold italic text-secondary pt-16 pb-8">
          Our Apparatus
        </h3>
        <div className="xl:mx-8"></div>
      </div>
    </main>
  );
}
