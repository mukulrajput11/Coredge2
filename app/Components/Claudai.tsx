'use client';
import React from 'react';

const Claudai = () => {
  return (
    <>
    <section 
      className="max-w-full relative bg-black overflow-hidden items-center
                  h-[600px] md:h-[700px] 2xl:h-[850px] 2xl:w-[full] mx-auto"
      style={{
        
        backgroundImage: 'url("/claud.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     
     <div className="absolute w-[100%] h-[100%]  flex flex-col px-40  t-0 z-10 items-center justify-center px-6">
      <div className="container mx-auto text-center">
        
        {/* Main Heading */}
        <h1 className="text-[#ffffff] font-semibold leading-[74px]
                       md:text-[44px] xl:text-[54px] 2xl:text-[64px]">
          Sovereign Cloud & AI Infrastructure <br className="hidden sm:block" /> For The Modern Enterprise
        </h1>

        {/* Subheading */}
        <p className="text-[#ffffff] max-w-[850px] leading-[30px]
                      md:text-[16px] 2xl:text-[20px] font-normal text center mx-auto">
          Deploy secure, scalable, and compliant cloud infrastructure with full data sovereignty. 
          From GPU-powered AI workloads to edge computing—all orchestrated from a single platform.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 2xl:mt-4 justify-center">
          <button className="w-[227px] h-[48px] 2xl:h-[56px] px-8 bg-[#0095B6] text-white rounded-md  transition-all text-sm 2xl:text-base font-medium text-[20px]">
            Discover Products
          </button>
          <button className="w-[222px] h-[48px] 2xl:h-[56px] px-8 border border-[#0095B6] text-white rounded-md font-medium  transition-all text-sm 2xl:text-base font-medium text-[20px]">
            Request a Demo
          </button>
        </div>
      </div>

      </div>

     
   <div className="relative z-10 w-full h-full mt-24 2xl:mt-40 mb-20 px-6">
  
  <div className="mx-auto max-w-[1589px] 
                  flex flex-wrap items-center justify-center 2xl:justify-between 
                  gap-x-12 md:gap-x-20 2xl:gap-x-0 gap-y-10 
                  opacity-50 grayscale opacity-100 transition-all duration-500 mt-[-100px]">
    
    {/* Image Scaling:
        */}
    <div className="flex justify-center min-w-[140px] md:min-w-min">
      <img src="/cisco.png" alt="Cisco" className="h-8 md:h-10 2xl:h-[32px] w-auto object-contain" />
    </div>

    <div className="flex justify-center min-w-[140px] md:min-w-min">
      <img src="/dell.png" alt="Dell" className="h-6 md:h-8 2xl:h-[28px] w-auto object-contain" />
    </div>

    <div className="flex justify-center min-w-[140px] md:min-w-min">
      <img src="/google.png" alt="Google" className="h-8 md:h-10 2xl:h-[32px] w-auto object-contain" />
    </div>

    <div className="flex justify-center min-w-[140px] md:min-w-min">
      <img src="/qualcomm.png" alt="Qualcomm" className="h-6 md:h-8 2xl:h-[26px] w-auto object-contain" />
    </div>

    <div className="flex justify-center min-w-[140px] md:min-w-min">
      <img src="/broadcom.png" alt="Broadcom" className="h-5 md:h-6 2xl:h-[22px] w-auto object-contain" />
    </div>

    <div className="flex justify-center min-w-[140px] md:min-w-min">
      <img src="/maerif.png" alt="Maerif" className="h-8 md:h-10 2xl:h-[32px] w-auto object-contain" />
    </div>
         
         {/* Gradient Overlay  bottom fade  */}
      <div className="absolute bottom-0 left-0 w-full h-38 bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />
  </div>
</div>   

{/* --- 3. LOGO BAR SECTION --- */}

    </section>


      
</>
  );
};


export default Claudai;