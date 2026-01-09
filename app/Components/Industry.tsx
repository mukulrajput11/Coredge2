'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Industry() {
    return (
        <div className="relative w-full py-16 bg-[#0B0B0B]">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-white text-5xl font-bold">
                    Trusted by Industry Leaders
                </h2>
                <p className="text-white text-xl mt-3">
                    See how organizations achieve measurable results
                </p>
            </div>
            <div className="flex justify-end gap-4 px-16 mb-6">
                <button className="industry-prev">←</button>
                <button className="industry-next">→</button>
            </div>
            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={80}
                loop={true}

                allowTouchMove={true}   // ❌ swipe/drag band
                navigation={{
                    prevEl: '.industry-prev',
                    nextEl: '.industry-next',
                }}
                speed={600}
                slidesPerView={4.5}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    445: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4.5 },
                    2520: { slidesPerView: 5.5 },
                }}
                className="px-40"
            >
                const industry={[
                    '/Industry-img1.png',
                    '/Industry-img3.png',
                    '/Industry-img3.png',
                    '/Industry-img4.png',
                    '/Industry-img4.png',
                    '/Industry-img4.png',
                    '/Industry-img4.png',
                    '/Industry-img4.png',
                ].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-[80%] lg:w-full ml-8 gap-6 rounded-xl overflow-hidden shadow-lg my-auto group ">
                            <img
                                src={img}
                                alt="Healthcare"
                                className="w-full object-cover group-hover:blur-[5px]"
                            />


                            <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:top-0 group-hover:bg-[#000000B2] transition-all duration-500 ease-in-out -translate-y-2 flex flex-col justify-between group-hover:translate-y-0">
                                <h3 className="text-white text-[32px] font-semibold">
                                    Healthcare
                                </h3>

                                <p className="hidden group-hover:block text-white text-[20px] transition-all duration-300 ease-in-out">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-end gap-[10px] px-16 mt-6 flex flex-row justify-self-center">
                <button className="industry-prev bg-[#1515154F] hover:bg-[#3030304f] text-white px-5 py-3 text-center text-2xl rounded-full border-[1px] border-[#3F3F3F] ">
                    ←
                </button>

                <button className="industry-next bg-[#1515154F] hover:bg-[#3030304f] text-white px-5 py-3 text-center text-2xl rounded-full border-[1px] border-[#3F3F3F]">
                    →
                </button>
            </div>

        </div>
    )
}
