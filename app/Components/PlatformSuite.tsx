

// 'use client';
// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const PlatformSuite = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const cards = [
//     {
//       title: "Sovereign AI",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Cloud Orbiter",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Cirrus Cloud Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Kubernetes Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Cloud Orbiter",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Kubernetes Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Cloud Orbiter",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Kubernetes Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Cloud Orbiter",
//       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
//     }
//   ];

//   return (
//     <section className="bg-black py-16 md:py-24 px-4 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Area */}
//         <div className="text-center mb-16">
//           <h2 className="text-white text-[2.5rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-tight mb-4">
//             Comprehensive Platform Suite
//           </h2>
//           <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] max-w-2xl mx-auto">
//             Everything you need to build, deploy, and manage sovereign cloud infrastructure at scale
//           </p>
//         </div>

//         {/* Cards Container - No Swiper, using Flexbox */}
//         <div className="relative">
//           <div className="flex gap-4 mb-12">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
//                   activeIndex === index 
//                     ? 'flex-[2] h-[450px]' 
//                     : 'flex-[0.7] h-[450px]'
//                 }`}
//                 style={{
//                   minWidth: activeIndex === index ? '400px' : '200px'
//                 }}
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                   <img 
//                     src={card.img} 
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-500"
//                   />
//                 </div>
              
                
//                 {/* Content - Only show fully on active card */}
//                 <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${
//                   activeIndex === index ? 'opacity-100' : 'opacity-0'
//                 }`}>
//                   <h3 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight mb-3">
//                     {card.title}
//                   </h3>
//                   <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-6">
//                     {card.desc}
//                   </p>
                  
//                   {/* Action Button */}
//                   <button className="bg-[#0095b6] text-white py-2.5 px-6 rounded-lg text-[14px] md:text-[16px] font-medium transition-all duration-300">
//                     Explore Platform
//                   </button>
//                 </div>

//                 {/* Title for inactive cards - Show on side */}
//                 <div className={`absolute bottom-8 left-0 right-0 transition-all duration-500 ${
//                   activeIndex === index ? 'opacity-0' : 'opacity-100'
//                 }`}>
//                   <h3 className="text-white text-[20px] md:text-[24px] font-medium px-6 text-center">
//                     {card.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex justify-center gap-3">
//             <button 
//               onClick={() => setActiveIndex(prev => prev > 0 ? prev - 1 : cards.length - 1)}
//               className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white transition-all cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
// <path d="M0.496583 7.88862L7.4747 0.529817C7.79575 0.210593 8.2758 0.221183 8.57111 0.499559C8.86642 0.777934 8.88004 1.29989 8.6014 1.59492L2.87126 7.64657H22.1669C22.5955 7.64657 22.9423 7.99301 22.9423 8.42118C22.9423 8.84934 22.5955 9.19579 22.1669 9.19579H2.87126L8.6014 15.2474C8.88004 15.5424 8.86338 16.0614 8.57111 16.3428C8.25461 16.6484 7.75338 16.6075 7.4747 16.3125L0.496583 8.95374C0.260344 8.7389 0.184628 8.19575 0.496583 7.88862Z" fill="white" stroke="white" stroke-width="0.580827"/>
// </svg>
//             </button>
//             <button 
//               onClick={() => setActiveIndex(prev => prev < cards.length - 1 ? prev + 1 : 0)}
//               className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
// <path d="M22.7358 7.88862L15.7577 0.529817C15.4367 0.210593 14.9566 0.221183 14.6613 0.499559C14.366 0.777934 14.3524 1.29989 14.631 1.59492L20.3612 7.64657H1.06548C0.636902 7.64657 0.290129 7.99301 0.290129 8.42118C0.290129 8.84934 0.636902 9.19579 1.06548 9.19579H20.3612L14.631 15.2474C14.3524 15.5424 14.369 16.0614 14.6613 16.3428C14.9778 16.6484 15.479 16.6075 15.7577 16.3125L22.7358 8.95374C22.9721 8.7389 23.0478 8.19575 22.7358 7.88862Z" fill="white" stroke="white" stroke-width="0.580827"/>
// </svg>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PlatformSuite;


'use client';
import React, { useState, useRef, useEffect } from 'react';

const PlatformSuite = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      title: "Sovereign AI",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Cirrus Cloud Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    }
  ];

  const [activeCard, setActiveCard] = useState(null);

  // Scroll to active card when using navigation buttons
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      
      // Scroll to show next set of cards
      const scrollPosition = activeIndex * 220; // 200px card + 20px gap
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev < cards.length - 1 ? prev + 1 : cards.length - 1);
  };

  return (
    <section className="bg-black py-16 md:py-24 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[2.5rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-tight mb-4">
            Comprehensive Platform Suite
          </h2>
          <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] max-w-2xl mx-auto">
            Everything you need to build, deploy, and manage sovereign cloud infrastructure at scale
          </p>
        </div>

        {/* Cards Container - Scrollable */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-4 mb-12 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                onClick={() => setActiveCard(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex-shrink-0 h-[450px]`}
                style={{
                  width: activeCard === index ? '400px' : '200px',
                  minWidth: activeCard === index ? '400px' : '200px'
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={card.img} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
              
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content - Only show fully on active card */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  
                  {/* Action Button */}
                  <button className="bg-[#0095b6] hover:bg-[#007a94] text-white py-2.5 px-6 rounded-lg text-[14px] md:text-[16px] font-medium transition-all duration-300">
                    Explore Platform
                  </button>
                </div>

                {/* Title for inactive cards - Show on side */}
                <div className={`absolute bottom-8 left-0 right-0 transition-all duration-500 ${
                  activeCard === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h3 className="text-white text-[20px] md:text-[24px] font-medium px-6 text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-3">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                <path d="M0.496583 7.88862L7.4747 0.529817C7.79575 0.210593 8.2758 0.221183 8.57111 0.499559C8.86642 0.777934 8.88004 1.29989 8.6014 1.59492L2.87126 7.64657H22.1669C22.5955 7.64657 22.9423 7.99301 22.9423 8.42118C22.9423 8.84934 22.5955 9.19579 22.1669 9.19579H2.87126L8.6014 15.2474C8.88004 15.5424 8.86338 16.0614 8.57111 16.3428C8.25461 16.6484 7.75338 16.6075 7.4747 16.3125L0.496583 8.95374C0.260344 8.7389 0.184628 8.19575 0.496583 7.88862Z" fill="white" stroke="white" strokeWidth="0.580827"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                <path d="M22.7358 7.88862L15.7577 0.529817C15.4367 0.210593 14.9566 0.221183 14.6613 0.499559C14.366 0.777934 14.3524 1.29989 14.631 1.59492L20.3612 7.64657H1.06548C0.636902 7.64657 0.290129 7.99301 0.290129 8.42118C0.290129 8.84934 0.636902 9.19579 1.06548 9.19579H20.3612L14.631 15.2474C14.3524 15.5424 14.369 16.0614 14.6613 16.3428C14.9778 16.6484 15.479 16.6075 15.7577 16.3125L22.7358 8.95374C22.9721 8.7389 23.0478 8.19575 22.7358 7.88862Z" fill="white" stroke="white" strokeWidth="0.580827"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PlatformSuite;