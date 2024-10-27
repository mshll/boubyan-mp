import React from 'react';
import background from '@/images/section1.svg';
import Image from 'next/image';
// salem
function Section1() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 bg-white relative min-h-screen">
      <div className="w-full relative flex items-center justify-evenly px-12 md:px-2 md:-bottom-44">
        <div className=" flex flex-col items-start justify-start z-10">
          <h6 className="mb-1 text-xl md:hidden">Boubyan</h6>
          <h1 className="text-4xl md:text-5xl mb-6 font-extrabold text-grey max-w-lg leading-snug">Digital Factory Now at Cairo!</h1>
          <p className="text-sm text-grey max-w-xl mb-6">
            Boubyan Digital Factory offers a great potential for growth and development in a unique environment driven by a strong culture of digital
            innovation.
          </p>
          <button className="px-10 py-4 bg-red text-white font-semibold border border-black hover:bg-red-dark shadow-md transition">
            Join us today
          </button>
        </div>
        <div className=""></div>
      </div>
      <Image src={background} alt="Background" layout="fit" objectFit="cover" className="w-[150%] bg-cover bg-bottom " />
    </section>
  );
}

export default Section1;
