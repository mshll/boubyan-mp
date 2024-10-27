// janna
'use client';
import Image from 'next/image';
import { useState } from 'react';
import section6img from '@/images/section6img.svg';

function Section6() {
  const [activeTab, setActiveTab] = useState('');
  const activeClasses = 'border-b border-red text-red font-semibold text-xs py-4 px-4 cursor-pointer';
  const inactiveClasses = 'text-grey font-semibold text-xs py-4 px-4 hover:text-red transition-colors duration-75 cursor-pointer';

  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="flex flex-col justify-around items-center bg-gray-light m-10 relative w-full pt-20">
      <div className="z-10">
        <h1 className="text-grey font-semibold text-2xl">Available opportunities</h1>
      </div>

      {/* image absolute center right */}
      <Image
        src={section6img}
        alt="section6img"
        layout="fit"
        objectFit="cover"
        className="absolute right-0 top-0 z-0 md:inline-block hidden"
        width={400}
        height={400}
      />

      {/* mini navbar */}
      <div className="container flex flex-row justify-start gap-5 mb-10 mt-5 md:pl-32">
        <p onClick={() => handleActiveTab('Design')} className={activeTab === 'Design' ? activeClasses : inactiveClasses}>
          Design
        </p>
        <p onClick={() => handleActiveTab('Software development')} className={activeTab === 'Software development' ? activeClasses : inactiveClasses}>
          Software development
        </p>
        <p onClick={() => handleActiveTab('Product ownership')} className={activeTab === 'Product ownership' ? activeClasses : inactiveClasses}>
          Product ownership
        </p>
        <p onClick={() => handleActiveTab('Management')} className={activeTab === 'Management' ? activeClasses : inactiveClasses}>
          Management
        </p>
      </div>

      {/* cards */}
      <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto z-10">
        <div className="bg-white rounded-xl p-5 shadow-sm w-96 md:w-96 lg:w-[500px]">
          <div className="mb-10">
            <h1 className="text-grey text-lg font-semibold">Lead UX UI design team</h1>
            <p className="text-grey text-sm">12 Jan 2021 | Cairo </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-grey text-sm">Full Time, on Site</p>
            <button className="text-md text-red font-bold">Apply Now</button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm w-96 md:w-96 lg:w-[500px]">
          <div className="mb-10">
            <h1 className="text-grey text-lg font-semibold">Senior UX UI Designer</h1>
            <p className="text-grey text-sm">12 Jan 2021 | Cairo </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-grey text-sm">Full Time, on Site</p>
            <button className="text-md text-red font-bold">Apply Now</button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm w-96 md:w-96 lg:w-[500px]">
          <div className="mb-10">
            <h1 className="text-grey text-lg font-semibold">UX Content writer</h1>
            <p className="text-grey text-sm">12 Jan 2021 | Cairo </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-grey text-sm">Full Time, on Site</p>
            <button className="text-md text-red font-bold">Apply Now</button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm w-96 md:w-96 lg:w-[500px]">
          <div className="mb-10">
            <h1 className="text-grey text-lg font-semibold">UX Researcher</h1>
            <p className="text-grey text-sm">12 Jan 2021 | Cairo </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-grey text-sm">Full Time, on Site</p>
            <button className="text-md text-red font-bold">Apply Now</button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm w-96 md:w-96 lg:w-[500px]">
          <div className="mb-10">
            <h1 className="text-grey text-lg font-semibold">UX UI Designer</h1>
            <p className="text-grey text-sm">12 Jan 2021 | Cairo </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-grey text-sm">Full Time, on Site</p>
            <button className="text-md text-red font-bold">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section6;
