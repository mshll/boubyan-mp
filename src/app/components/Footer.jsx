'use client';
import Image from 'next/image';
import logo from '@/images/footer-logo.png';
import background from '@/images/footer-bg.png';
import Link from 'next/link';
import BackToTopImage from '@/images/back-to-top.svg';

// meshal
function Footer() {
  const footerItems = [
    { name: 'Address', content: '12 St, heliopolis, Cairo - Egypt' },
    { name: 'Email Address', content: 'Careers@boubyandf.com' },
    { name: 'Phone Number', content: '(+20) 111 12 12345' },
  ];

  return (
    <footer>
      <div className="w-full bg-white py-10 min-h-[550px] relative text-white">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-20 top-0 -translate-y-1/2 z-20 hidden md:inline-block"
        >
          <Image src={BackToTopImage} alt="Back to top" width={80} height={80} />
        </button>
        <div className="absolute z-10 w-full h-full bg-grey-dark opacity-90 top-0"></div>
        <Image src={background} alt="Background" layout="fit" objectFit="cover" className="w-full absolute z-0 bottom-0 bg-cover bg-bottom" />
        <div className="container flex items-center justify-between gap-12 z-20 relative flex-col md:flex-row px-12">
          <div className="gap-12 flex flex-col flex-1 justify-start">
            <Image src={logo} alt="Logo" width={128} height={128} />
            <p className="text-xs font-medium text-wrap md:max-w-96">
              Boubyan Digital Factory offers a great potential for growth and development in a unique environment driven by a strong culture of
              digital innovation.
            </p>
            <div>
              <button className="bg-red rounded-md px-8 py-4 font-semibold text-sm transition duration-150 hover:bg-red-dark">Join us today</button>
            </div>
          </div>
          <div className="gap-16 flex flex-col justify-start self-start flex-1 py-16">
            <h3 className="text-2xl font-semibold">Contact us</h3>
            <div className="flex gap-10 flex-col  md:flex-row">
              {footerItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <div className="text-grey-light uppercase text-xs">{item.name}</div>
                  <div className="text-white text-sm">{item.content}</div>
                </div>
              ))}
            </div>
            <Link
              className="text-xs flex gap-3 font-medium items-center group"
              href={'https://eg.linkedin.com/company/boubyan-digital-factory'}
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-150 text-black group-hover:text-[#1574B1]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.772 0H22.2213C23.2 0 24 0.773333 24 1.72933V22.2707C24 23.2267 23.2 24 22.2213 24H1.77067C0.792 24 0 23.2267 0 22.2707V1.72933C0 0.773333 0.790667 0 1.772 0ZM3.87661 6.82911C4.26372 7.21647 4.78905 7.43387 5.33667 7.43333L5.336 7.43333H5.33733L5.33667 7.43333C6.47628 7.43371 7.4006 6.51036 7.40133 5.37067C7.40207 4.23075 6.47858 3.30607 5.33867 3.30533C4.19875 3.3046 3.27407 4.22808 3.27333 5.368C3.27227 5.91585 3.48934 6.4416 3.87661 6.82911ZM16.8933 20.452H20.4467H20.448V14.1653C20.448 11.0813 19.7813 8.71067 16.1813 8.71067C14.448 8.71067 13.288 9.66133 12.8107 10.56H12.764V9H9.35067V20.452H12.9053V14.7853C12.9053 13.2907 13.188 11.8453 15.04 11.8453C16.8667 11.8453 16.8933 13.5547 16.8933 14.8827V20.452ZM3.55467 20.452V9H7.12V20.452H7.11867H3.55467Z"
                  fill="currentColor"
                />
              </svg>
              Check our Linkedin page
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto text-grey text-xs py-4">&copy; Copyright 2020. Boubyan Digital Factory. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
export default Footer;
