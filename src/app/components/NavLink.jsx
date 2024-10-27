'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClasses = 'md:border-b md:border-l-0 border-l border-red text-red';
  const inactiveClasses = '';
  return (
    <Link
      href={href}
      {...props}
      className={`text-grey font-semibold text-xl md:text-xs md:py-9 py-4 px-4 hover:text-red transition-colors duration-75 ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </Link>
  );
}
export default NavLink;
