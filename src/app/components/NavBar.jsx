'use client';
import Image from 'next/image';
import Link from 'next/link';
import siteLogo from '@/images/logo.png';
import NavLink from './NavLink';
import BurgerIcon from '@/images/burger.svg';
import CrossIcon from '@/images/cross.svg';

// meshal
function NavBar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'What We Do', href: '/whatwedo' },
    { name: 'Why Join Us', href: '/joinus' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white z-50 shadow-md shadow-grey-light/[.3] text-grey">
      <nav className="container mx-auto flex items-center justify-between px-3">
        <button className="md:hidden" onClick={() => document.getElementById('mobilenav').classList.remove('hidden')}>
          <Image src={BurgerIcon} alt="Burger" width={24} height={24} className="md:hidden inline-block" />
        </button>
        <Link href="/" className="flex items-center justify-center gap-x-2 py-6">
          <Image src={siteLogo} alt="Logo" width={128} height={128} />
        </Link>
        <div className="md:divide-x divide-grey flex md:flex-1 items-center justify-end gap-4 divide-opacity-50">
          <div className="flex-1 items-center justify-end gap-x-4 hidden md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <Link
            className="pl-8 transition duration-150 text-[#1574B1] hover:text-grey-dark"
            href={'https://eg.linkedin.com/company/boubyan-digital-factory'}
            target="_blank"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.772 0H22.2213C23.2 0 24 0.773333 24 1.72933V22.2707C24 23.2267 23.2 24 22.2213 24H1.77067C0.792 24 0 23.2267 0 22.2707V1.72933C0 0.773333 0.790667 0 1.772 0ZM3.87661 6.82911C4.26372 7.21647 4.78905 7.43387 5.33667 7.43333L5.336 7.43333H5.33733L5.33667 7.43333C6.47628 7.43371 7.4006 6.51036 7.40133 5.37067C7.40207 4.23075 6.47858 3.30607 5.33867 3.30533C4.19875 3.3046 3.27407 4.22808 3.27333 5.368C3.27227 5.91585 3.48934 6.4416 3.87661 6.82911ZM16.8933 20.452H20.4467H20.448V14.1653C20.448 11.0813 19.7813 8.71067 16.1813 8.71067C14.448 8.71067 13.288 9.66133 12.8107 10.56H12.764V9H9.35067V20.452H12.9053V14.7853C12.9053 13.2907 13.188 11.8453 15.04 11.8453C16.8667 11.8453 16.8933 13.5547 16.8933 14.8827V20.452ZM3.55467 20.452V9H7.12V20.452H7.11867H3.55467Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <div
        className="md:hidden hidden container mx-auto h-screen flex flex-col items-start pt-16 justify-start fixed top-0 left-0 bg-white w-full z-100"
        id="mobilenav"
      >
        {/* close button */}
        <button className="pb-8 px-8" onClick={() => document.getElementById('mobilenav').classList.add('hidden')}>
          <Image src={CrossIcon} alt="Cross" width={18} height={18} />
        </button>
        <div className="flex-col items-start justify-end gap-x-4 md:hidden flex gap-6 px-12">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="border-t flex flex-col gap-6 justify-start items-start w-full h-full px-8 mt-6">
          <Link
            className="text-xs flex gap-3 font-medium items-center group mt-6"
            href={'https://eg.linkedin.com/company/boubyan-digital-factory'}
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-150 text-[#1574B1] group-hover:text-black"
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
          <button className="px-6 rounded-md py-4 bg-red text-white font-semibold w-full mb-10 hover:bg-red-dark shadow-md transition">
            Join us today
          </button>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
