'use client';

import Image from "next/image";
import React, { useEffect, useRef, useState  } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";

export default function Home() {

  const youtubeLinks = [
    "https://www.youtube.com/embed/S_-gDHR9ybs",
    "https://www.youtube.com/embed/OjrJ5fHfFtI",
    "https://www.youtube.com/embed/dnqjwAsEdYg"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % youtubeLinks.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? youtubeLinks.length - 1 : prevIndex - 1
    );
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  }, []);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // อย่าลืมขอ logo svg

  return (
    <ParallaxProvider>
      
      <main className="min-h-screen relative overflow-hidden">

        <Parallax speed={-50} className="absolute inset-0 z-0">
          <div
            className="bg-[url('/EggBG.png')] bg-repeat bg-cover w-full h-full"
            style={{
              backgroundSize: '180%',
              backgroundPosition: 'left',
            }}
          />
        </Parallax>

        <div className="relative z-10">
          <header className="h-[120px] bg-transparent">
            <nav className="flex justify-center items-center h-full px-5">
              <div className="relative flex items-center justify-center space-x-20">
                <a href="/" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  About us
                </a>
                <a href="/products" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  Products
                </a>
                <div>
                  <Image src="/main_logo.png" width={80} height={80} alt="Logo"/>
                </div>
                <a href="/updates" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  Updates
                </a>
                <a href="/contact-us" className="tracking-[-1px] relative font-kanit text-[24px] text-[#000000] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 group-hover:after:w-0 group-hover:after:left-1/2 duration-300 hover:scale-110">
                  Contact us
                </a>
              </div>
              <div className="absolute right-5 flex space-x-5">
                <div className="w-[47px] h-[47px] overflow-hidden transform translate-y-0">
                  <Link href="https://www.facebook.com/EGGbiopak" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/facebook_svg.svg"
                      layout="intrinsic"
                      width={100}
                      height={100}
                      objectFit="contain"
                      alt="Facebook Icon"
                    />
                  </Link>
                </div>
                <Image src="/line_svg.svg" width={40} height={40} alt="Line Icon" />
              </div>
            </nav>
          </header>

        <div className="relative">

          <div className="relative">
            <section className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] flex">
              {/* Text Container */}
              <motion.div
                className="w-1/2 flex flex-col justify-center"
                initial={{ x: "-100%", opacity: 0 }} // Start off-screen to the left
                animate={{ x: "8rem", opacity: 1 }} // Slide in to the current position
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                style={{ transform: "translateY(-1.25rem)" }} // translate-y-5 = -1.25rem
              >
                <a className="font-kanit font-semibold text-[96px] text-[#005844]">Egg Corporation</a>
                <a className="font-kanit text-[24px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</a>
                <a className="font-kanit text-[24px] transform -translate-y-2 text-[#000000]">eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
              </motion.div>

              {/* Image Container */}
              <div className="w-1/2 relative">
                <motion.div
                  className="absolute top-10 right-0 z-0 drop-shadow-xl"
                  initial={{ x: "100%", opacity: 0, rotate: 0 }} // Start off-screen to the right with no rotation
                  animate={{ x: "5rem", opacity: 0.8, rotate: -12 }} // Slide in and rotate to -12 degrees
                  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                >
                  <Image src="/Egg-CupEX.png" width={1000} height={600} alt="EX" />
                </motion.div>
              </div>
            </section>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  const aboutUsSection = document.getElementById("about-us-section");
                  if (aboutUsSection) {
                    aboutUsSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="p-3 bg-transparent text-[#005844] font-kanit text-[20px] rounded-lg hover:text-[#004633] transition-all duration-300"
              >
                {/* Down Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 transform transition-all duration-300 hover:scale-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

          </div>
      
          <section id="about-us-section" className="min-h-screen max-h-screen bg-[#f2f9fb] relative z-10 shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px]">
            <Image
              src="/Pic_1.jpg"
              alt="Pic1"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-30 blur-sm z-0"
            />
              <div className="relative z-10">

                <div className="flex pt-10 justify-center">
                <a className="font-kanit font-semibold text-[86px] text-[#005844]">About us</a>
                </div>

              </div>

              <div className="absolute inset-x-0 bottom-0 h-[calc(100vh-10rem)]">
                {/* Background box */}
                <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-[#85B09A] opacity-20 border-2"></div>
                </div>

                {/* Text Section on the Left */}
                <div className="pl-5 pr-5 absolute top-[50%] right-[13%] -translate-y-1/2 w-[30%] max-w-[600px] z-20"> {/* Add z-20 */}
                  <motion.div
                    className="flex flex-col justify-center space-y-4"
                    initial={{ x: "10%", opacity: 0 }} // Start off-screen to the left
                    whileInView={{ x: "0", opacity: 1 }} // Slide in to the current position
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <div>

                    <a className="font-kanit font-semibold text-[24px] xl:text-[48px] lg:text-[36px] text-[#005844]">Egg Corporation </a>
                    
                    <a className="font-kanit font-extralight text-[16px] xl:text-[24px] lg:text-[20px] text-black">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </a>

                    </div>

                  </motion.div>
                </div>

                {/* Image Section on the Right */}
                <div className="absolute top-[45%] left-[7%] -translate-y-1/2 w-[50%] max-w-[900px] z-10"> {/* Add z-10 */}
                  <motion.div
                    className="flex flex-col justify-center"
                    initial={{ x: "-10%", opacity: 0 }} // Start off-screen to the left
                    whileInView={{ x: "0", opacity: 1 }} // Slide in to the current position
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      src="/Pic_1.jpg"
                      alt="Pic1"
                      width={800} // Base width for responsiveness
                      height={800} // Base height for responsiveness
                      className="w-full h-auto object-cover rounded-[10%] shadow-[rgba(0,0,12,0.3)_6px_7px_13px_0px]"
                    />
                  </motion.div>
                </div>

                <div className="absolute top-[70%] left-[1%] scale-x-[-1] scale-y-[-1] -translate-y-1/2 w-[50%] max-w-[350px] z-30"> {/* Add z-10 */}
                  <motion.div
                    className="flex flex-col justify-center"
                    initial={{ x: "30%", opacity: 0 }} // Start off-screen to the left
                    whileInView={{ x: "0", opacity: 1 }} // Slide in to the current position
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      src="/Pic_2.svg"
                      alt="Pic1"
                      width={200} // Base width for responsiveness
                      height={200} // Base height for responsiveness
                      className="w-full h-auto object-cover rounded-[10%] -rotate-90"
                    />
                  </motion.div>
                </div>

              </div>

          </section>

        </div>
            
        <section className="min-h-[1700px] max-h-screen flex items-center justify-evenly relative overflow-hidden">
          <div className="images-wrapper flex flex-col z-10 pr-4">
            {/* Two identical sets for seamless looping */}
            <div className="image-track mt-[1700px]">
              <div className="pb-10"><Image src="/main_adpic/Ad_1.jpg" width={295} height={295} alt="Ad_1" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_2.jpg" width={295} height={295} alt="Ad_2" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_3.jpg" width={295} height={443} alt="Ad_3" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_4.jpg" width={295} height={295} alt="Ad_4" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_5.jpg" width={295} height={295} alt="Ad_5" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              {/* Duplicate set to enable seamless looping */}
              <div className="pb-10"><Image src="/main_adpic/Ad_1.jpg" width={295} height={295} alt="Ad_1" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_2.jpg" width={295} height={295} alt="Ad_2" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_3.jpg" width={295} height={443} alt="Ad_3" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_4.jpg" width={295} height={295} alt="Ad_4" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_5.jpg" width={295} height={295} alt="Ad_5" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
            </div>
          </div>

          {/* Products Content */}
          <div className="flex flex-col z-0">
            <a className="flex justify-center font-kanit font-semibold text-[86px] text-[#005844]">Products</a>
            <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-5">Lorem ipsum dolor sit amet, consectetur</a>
            <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-7">adipiscing elit, sed do eiusmod</a>
          </div>

          <div className="images-wrapper flex flex-col z-10 pr-4">
            {/* Two identical sets for seamless looping */}
            <div className="image-track-d mt-[-1700px]">
              <div className="pb-10"><Image src="/main_adpic/Ad_6.jpg" width={295} height={295} alt="Ad_6" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_7.jpg" width={295} height={295} alt="Ad_7" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_8.jpg" width={295} height={295} alt="Ad_8" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_9.jpg" width={295} height={295} alt="Ad_9" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_10.jpg" width={295} height={295} alt="Ad_10" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_11.jpg" width={295} height={295} alt="Ad_11" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              {/* Duplicate set to enable seamless looping */}
              <div className="pb-10"><Image src="/main_adpic/Ad_6.jpg" width={295} height={295} alt="Ad_6" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_7.jpg" width={295} height={295} alt="Ad_7" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_8.jpg" width={295} height={295} alt="Ad_8" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_9.jpg" width={295} height={295} alt="Ad_9" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_10.jpg" width={295} height={295} alt="Ad_10" className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"/></div>
              <div className="pb-10"><Image src="/main_adpic/Ad_11.jpg" width={295} height={295} alt="Ad_11" className="rounded-3xl"/></div>
            </div>
          </div>
        </section>



        <section className="min-h-screen max-h-screen bg-[#f2f9fb] relative z-10 shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px]">
          <Image
            src="/Pic_1.jpg"
            alt="Pic1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 opacity-30 blur-sm z-0"
          />
          <div className="relative z-10 flex flex-col justify-center items-center">
            <a className="font-kanit font-semibold text-[86px] text-[#005844] pt-10">Videos</a>
            <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-5">Lorem ipsum dolor sit amet, consectetur</a>
            <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-7">adipiscing elit, sed do eiusmod</a>

            {/* Video slider container */}
            <div className="relative flex justify-center items-center mt-6 w-full max-w-[1100px]">
              {/* Previous button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-20 bg-transparent px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 transform transition-all duration-300 hover:scale-150 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Embedded YouTube video */}
              <div className="w-full aspect-video max-w-[1100px] rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  key={currentVideoIndex}
                  src={youtubeLinks[currentVideoIndex]}
                  title={`YouTube video ${currentVideoIndex + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-0 z-20 bg-transparent px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 transform transition-all duration-300 hover:scale-150 -rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>


        <section className="relative min-h-screen max-h-screen">

        <div className="relative z-10 flex flex-col justify-center items-center">

          <a className="font-kanit font-semibold text-[86px] text-[#005844] pt-20">More from us</a>
          <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-5">Lorem ipsum dolor sit amet, consectetur</a>
          <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-7">adipiscing elit, sed do eiusmod</a>

        </div>

        <div className="absolute inset-x-0 bottom-0 h-[calc(100vh-10rem)]">

          <div className="flex flex-row h-[calc(100vh-10rem)] items-center justify-evenly">
            
            <div className="flex flex-col">
            <Image src="/PlaceHolder.png" width={295} height={295} alt="PH"/>
            <a className="flex justify-center font-kanit text-[48px] text-black -translate-y-5 pt-10">Porsiri Plastic</a>
            </div>

            <div className="flex flex-col">
            <Image src="/PlaceHolder.png" width={295} height={295} alt="PH"/>
            <a className="flex justify-center font-kanit text-[48px] text-black -translate-y-5 pt-10">Egg Biopak</a>
            </div>

            <div className="flex flex-col">
            <Image src="/PlaceHolder.png" width={295} height={295} alt="PH"/>
            <a className="flex justify-center font-kanit text-[48px] text-black -translate-y-5 pt-10">Lidstory</a>
            </div>

          </div>

        </div>

        </section>

  

          <footer className="relative min-h-[230px] max-h-screen bg-black shadow-[rgba(0,0,12,0.5)_0px_-10px_40px_0px] z-40">

                <div className="absolute flex flex-col top-[15%] left-[15%]">
                  <div className="font-kanit text-[16px] text-white pb-2 tracking-wider">Lorem ipsum dolor sit amet,</div>
                  <div className="font-kanit text-[16px] text-white pb-2 tracking-wider">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </div>
                  <div className="font-kanit text-[16px] text-white pb-5 tracking-wider">magna aliqua. Ut enim ad minim veniam, quis nostrud </div>

                  <div className="flex flex-row">
                  <Image src="/line_png.png" width={30} height={30} alt="line_white" className="mr-4"/>
                  <Image src="/facebook_png.png" width={30} height={30} alt="facebook_white"/>
                  </div>

                  <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                </div>

          </footer>
          
        </div>
      </main>


    </ParallaxProvider>
  );
}