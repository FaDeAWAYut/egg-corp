"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkBaseStyle =
    "tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 duration-300 hover:scale-110";

  return (
    <header className="h-[120px] bg-transparent">
      <nav className="flex justify-center items-center h-full px-5">
        <div className="relative flex items-center justify-center space-x-20">
          <Link
            href="/"
            className={`${linkBaseStyle} after:left-0 ${pathname === "/" ? "after:w-full" : "after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"}`}
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            href="/products-category"
            className={`${linkBaseStyle} after:left-0 ${pathname === "/products-category" || pathname === "/products-list" ? "after:w-full" : "after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"}`}
          >
            ผลิตภัณฑ์
          </Link>
          <div>
            <Image src="/main_logo.png" width={80} height={80} alt="Logo" />
          </div>
          <Link
            href="/updates"
            className={`${linkBaseStyle} after:left-0 ${pathname === "/updates" ? "after:w-full" : "after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"}`}
          >
            ข่าวสาร
          </Link>
          <Link
            href="/contact-us"
            className={`${linkBaseStyle} after:left-0 ${pathname === "/contact-us" ? "after:w-full" : "after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"}`}
          >
            ติดต่อเรา
          </Link>
        </div>
        <div className="absolute right-5 flex space-x-5 items-center">
          <div className="w-[47px] h-[47px] flex items-center justify-center overflow-hidden transform translate-y-0">
            <Link
              href="https://www.facebook.com/EGGbiopak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook_svg.svg"
                width={100}
                height={100}
                className="object-contain w-full h-full"
                alt="Facebook Icon"
              />
            </Link>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden transform translate-y-0">
            <Link
              href="https://line.me/ti/p/@eggbiopak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/line_svg.svg"
                width={100}
                height={100}
                className="object-contain w-full h-full"
                alt="Line Icon"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
