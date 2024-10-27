//janna

import Image from 'next/image';
import React from 'react';
import section5img from '@/images/section5img.svg';
import roundCheck from '@/images/roundCheck.svg';

function Section5() {
  return (
    <div className="flex flex-col justify-center bg-white relative md:pl-[100px] md:pr-[100px] pb-[30px]">
      {/* Div for description and button and image */}
      <div className="flex flex-col md:flex-row justify-center m-20 gap-20">
        <div className="flex flex-col justify-center gap-8 flex-1">
          <h1 className="flex font-bold text-4xl">
            <span className="text-grey">How to </span>
            <span className="text-red pl-2">apply?</span>
          </h1>

          <p className="text-grey">
            It&apos;s a process, and for good reason. When you apply for a position at <b>Boubyan digital factory</b>, we want to make sure it&apos;s
            the right fit - for both of us! Generally, here&apos;s what to expect:
          </p>

          <button className="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-4 px-4 border border-red hover:border-transparent rounded lg:w-3/4 w-auto">
            Check available opportunity
          </button>
        </div>

        <Image src={section5img} alt="section5" width={400} height={400} className="order-first md:order-last flex-1" />
      </div>

      {/* Div for steps */}

      <div className="flex flex-col md:flex-row justify-center gap-20">
        {/* 1-3-5 */}
        <div className="flex flex-col justify-center items-end">
          <div className="flex flex-row m-5 md:max-w-64 lg:max-w-96 h-max">
            <div className="flex flex-row">
              <h1 className="text-grey-light text-4xl font-bold">0</h1>
              <h1 className="text-grey text-4xl font-bold">1</h1>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-grey font-semibold text-xl mb-2">Create a profile</h2>
              <p className="text-grey">
                We&apos;re scientists, artists, communicators, technologists, and human-centred problem solvers focused on designing things all people
                will love.
              </p>
            </div>
          </div>

          <div className="flex flex-row m-5 md:max-w-64 lg:max-w-96 h-max">
            <div className="flex flex-row">
              <h1 className="text-grey-light text-4xl font-bold">0</h1>
              <h1 className="text-grey text-4xl font-bold">3</h1>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-grey font-semibold text-xl mb-2">Assessment</h2>
              <p className="text-grey">
                We spend our days focused on driving acquisition, growth, and sales through our digital channels — all with a focus on dat
              </p>
            </div>
          </div>

          <div className="flex flex-row m-5 md:max-w-64 lg:max-w-96 h-max">
            <div className="flex flex-row">
              <h1 className="text-grey-light text-4xl font-bold">0</h1>
              <h1 className="text-grey text-4xl font-bold">5</h1>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-grey font-semibold text-xl mb-2">Pre-Employment Screening</h2>
              <p className="text-grey">
                We work to identify real-life problems and solve them with technology to change the way our customers bank, one release at a time.{' '}
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}

        <div className="hidden md:flex flex-col items-center relative">
          <div className="border-l-2 border-dashed border-gray-300 h-full absolute inset-x-0">
            <div className="flex flex-col items-center mb-8">
              <div className="mt-[50px] w-6 h-6 bg-red rounded-full border-4 border-white shadow-lg"></div>
              <div className="h-10"></div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-6 h-6 bg-red rounded-full border-4 border-white shadow-lg"></div>
              <div className="h-10"></div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-6 h-6 bg-red rounded-full border-4 border-white shadow-lg"></div>
              <div className="h-10"></div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-6 h-6 bg-red rounded-full border-4 border-white shadow-lg"></div>
              <div className="h-10"></div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-6 h-6 bg-red rounded-full border-4 border-white shadow-lg"></div>
              <div className="h-10"></div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-6 h-6 bg-red rounded-full border-4 border-white shadow-lg"></div>
              <div className="h-10"></div>
            </div>
          </div>
        </div>

        {/* 2-4-6 */}

        <div className="flex flex-col justify-center items-start md:mt-40">
          <div className="flex flex-row m-5 md:max-w-64 lg:max-w-96 h-max">
            <div className="flex flex-row">
              <h1 className="text-grey-light text-4xl font-bold">0</h1>
              <h1 className="text-grey text-4xl font-bold">2</h1>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-grey font-semibold text-xl mb-2">Preliminary Interview</h2>
              <p className="text-grey">
                We believe in the power of data over intuition, and we lead the charge in embedding this data-driven approach into everything our
                teams
              </p>
            </div>
          </div>

          <div className="flex flex-row m-5 md:max-w-64 lg:max-w-96 h-max">
            <div className="flex flex-row">
              <h1 className="text-grey-light text-4xl font-bold">0</h1>
              <h1 className="text-grey text-4xl font-bold">4</h1>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-grey font-semibold text-xl mb-2">In-Person Interview</h2>
              <div className="text-grey">
                <p className="text-grey">We take ownership of business objectives and translate them into digital priorities, building exce</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row m-5 md:max-w-64 lg:max-w-96 h-max">
            <div className="flex flex-row">
              <h1 className="text-grey-light text-4xl font-bold">0</h1>
              <h1 className="text-grey text-4xl font-bold">6</h1>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-grey font-semibold text-xl mb-2">Reference Check</h2>
              <div className="text-grey">
                <p className="text-grey">The Platform Organization builds modern technology platforms that enable our teams to</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={roundCheck} alt="roundCheck" width={50} height={50} className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2" />
    </div>
  );
}

export default Section5;
