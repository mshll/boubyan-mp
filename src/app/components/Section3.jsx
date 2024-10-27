import Icon1 from '@/images/section3icon1.svg';
import Icon2 from '@/images/section3icon2.svg';
import Icon3 from '@/images/section3icon3.svg';
import Icon4 from '@/images/section3icon4.svg';
import Image from 'next/image';
import MainImage from '@/images/section3img.svg';

// meshal
function Section3() {
  const items = [
    {
      title: 'Big Ideas',
      description:
        "We're looking for problem-solvers, makers, and leaders who are ready to roll up their sleeves and collaborate to ship solutions to our customers.",
      icon: Icon1,
    },
    {
      title: 'Something new everyday',
      description:
        "You'll succeed not just in your day-to-day role but in your career as a whole through mobility, cross-functional development opportunities, and coaching.",
      icon: Icon2,
    },
    {
      title: 'Be mentored',
      description:
        "You'll learn from a wide variety of industry leaders, developing solutions not only locally, but for the global market alongside technology-focused teams in Kuwait.",
      icon: Icon3,
    },
    {
      title: 'Be mentored',
      description:
        "You'll create elegant digital experiences that let employees and customers take charge and enable Boubyan to drive meaningful change for every future.",
      icon: Icon4,
    },
  ];

  return (
    <section className="w-full bg-red pt-32 pb-40 relative mx-auto flex justify-center items-center flex-col gap-10 text-white z-10">
      <div className="absolute -top-24 lg:-top-44 left-1/2 transform -translate-x-1/2">
        <Image src={MainImage} alt="MainImage" width={500} height={500} />
      </div>
      <div className="h-[10px] md:h-[100px]"></div>
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center gap-8 text-center md:px-2 px-12">
          <h3 className="text-3xl font-bold">You are here because you believe in your exceptional talent. </h3>
          <p className="text-sm max-w-xl">
            Boubyan Digital Factory offers a great potential for growth and development in a unique environment driven by a strong culture of digital
            innovation.
          </p>
        </div>
        <div className="">
          <div className="flex gap-6 gap-y-16 items-start justify-center md:flex-row flex-col mx-auto px-12 md:px-8">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-start md:max-w-sm">
                <Image src={item.icon} alt="Icon" width={46} height={46} />
                <h2 className="text-base font-bold mt-8 mb-3">{item.title}</h2>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
