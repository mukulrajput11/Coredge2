'use client'
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const solutions = [
  {
    tag: "By Use Case",
    title: "AI/ML Training & Inference",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "Solutions.png",
  },
  {
    tag: "By Industry",
    title: "AI/ML Training & Inference",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "Solutions.png",
  },
  {
    tag: "By Industry",
    title: "AI/ML Training & Inference",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "Solutions.png",
  },
  {
    tag: "By Industry",
    title: "AI/ML Training & Inference",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "Solutions.png",
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative bg-[#0D0D0D] py-16 md:py-20 text-white overflow-hidden">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
        <h2 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-tight mb-4">
          Solutions That Drive Real Outcomes
        </h2>
        <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[28px] md:leading-[30px] max-w-2xl mx-auto">
          Purpose-built for your industry and use case
        </p>
      </div>

      {/* Swiper */}
      <div className="relative max-w-7xl h-auto mx-12 md:px-0 ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".solution-next",
            prevEl: ".solution-prev",
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1, spaceBetween: 60 },
            1024: { slidesPerView: 1.5, spaceBetween: 130 },
            1440: { slidesPerView: 1.5, spaceBetween: 40 },
            1530: { slidesPerView: 1.5, spaceBetween: 40 },
          }}
          className="!overflow-visible"
        >
          {solutions.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <div
                className="
                w-full
                lg:w-[60vh]
                xl:w-[70vh]
                2xl:w-auto
                grid grid-cols-1 md:grid-cols-2
                gap-6 md:gap-8
                bg-[#3B3B3B0D]
                backdrop-blur-md
                rounded-3xl
                transition-all duration-300
                shadow-none
                group-[.swiper-slide-active]:shadow-[0_6px_10px_#C4C0BB33]
              "
              >
                {/* Image */}
                <div className="relative h-auto rounded-2xl overflow-hidden 2xl:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-4 sm:p-6 md:pt-[66px] 2xl:p-0 2xl:pt-10">
                  <div className="max-w-full md:max-w-[420px]">
                    <h3 className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-medium leading-tight pb-4 md:pb-[32px]">
                      {item.tag}
                    </h3>

                    <h1 className="text-white text-[1.6rem] sm:text-[2rem] md:text-[3rem] lg:text-[40px] font-semibold leading-tight md:leading-[50px] pb-4 md:pb-[24px]">
                      {item.title}
                    </h1>

                    <p className="text-white text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 md:pb-[50px]">
                    <img src="soluarrow.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button className="solution-prev w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
          ←
        </button>
        <button className="solution-next w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
          →
        </button>
      </div>
    </section>
  );
}
