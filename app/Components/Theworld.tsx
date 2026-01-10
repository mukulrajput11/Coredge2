
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Theworld = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  const stats = [
    {
      value: "10K+",
      label: "GPUs Managed. Lorem Ipsum is simply dummy text",
    },
    {
      value: "60%",
      label: "TCO Savings. Lorem Ipsum is simply dummy text",
    },
    {
      value: "50%",
      label: "Faster Deployment. Lorem Ipsum is simply dummy text",
    },
    {
      value: "99.9",
      label: "Uptime SLA. Lorem Ipsum is simply dummy text",
    },
    {
      value: "60%",
      label: "TCO Savings. Lorem Ipsum is simply dummy text",
    },
    {
      value: "50%",
      label: "Faster Deployment. Lorem Ipsum is simply dummy text",
    },
    {
      value: "99.9",
      label: "Uptime SLA. Lorem Ipsum is simply dummy text",
    },
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(itemsPerView.tablet);
      } else {
        setSlidesToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, stats.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setTranslateX(walk);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setTranslateX(walk);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (translateX < -50) {
      nextSlide();
    } else if (translateX > 50) {
      prevSlide();
    }
    
    setTranslateX(0);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:py-24 md:px-12 lg:px-24 w-full font-Aktiv Grotesk">
      <div className="container mx-auto">
       
        <div className="text-center mb-12 md:mb-20 w-[100%] h-[100%]">
          <h2 className="text-[34px] md:text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium max-w-4xl mx-auto leading-tight">
            <span className="block">
              The world's #1 AI cloud platform,
            </span>
            <span className="block">
              purpose-built for what's next
            </span>
          </h2>
        </div>

        <div className="flex justify-center mb-16 md:mb-28">
          <img 
            src="Theworld.png" 
            alt="AI Platform Illustration"
            className="w-full max-w-[600px] h-auto object-contain opacity-80"
          />
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed rounded-full p-2 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed rounded-full p-2 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / slidesToShow)}% + ${translateX}px))`
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="flex flex-col border-t border-[#EAEAEA] pt-6 select-none">
                    <span 
                      className="text-[100px] md:text-[110px] lg:text-[118px] 2xl:text-[138px] font-light mb-4"
                      style={{
                        background: 'linear-gradient(90deg, #BEDD00 0%, #0095B6 63.14%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {stat.value}
                    </span>
                    <p className="text-sm md:text-base lg:text-[20px] font-normal text-white leading-[30px] max-w-[220px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theworld;