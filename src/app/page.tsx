"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const youtubeLinks = [
    "https://www.youtube.com/embed/S_-gDHR9ybs",
    "https://www.youtube.com/embed/OjrJ5fHfFtI",
    "https://www.youtube.com/embed/dnqjwAsEdYg",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % youtubeLinks.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? youtubeLinks.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  }, []);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
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
              backgroundSize: "180%",
              backgroundPosition: "left",
            }}
          />
        </Parallax>

        <div className="relative z-10">
          <Header />

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
                  <a className="font-kanit font-semibold text-[96px] text-[#005844]">
                    Egg Corporation
                  </a>
                  <a className="font-kanit text-[24px] text-[#000000]">
                    Your trust provider on plastic packaging and sustainable
                    products.
                  </a>
                </motion.div>

                {/* Image Container */}
                <div className="w-1/2 relative">
                  <motion.div
                    className="absolute top-10 right-0 z-0 drop-shadow-xl"
                    initial={{ x: "100%", opacity: 0, rotate: 0 }} // Start off-screen to the right with no rotation
                    animate={{ x: "5rem", opacity: 0.8, rotate: -12 }} // Slide in and rotate to -12 degrees
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                  >
                    <Image
                      src="/Egg-CupEX.png"
                      width={1000}
                      height={600}
                      alt="EX"
                    />
                  </motion.div>
                </div>
              </section>

              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => {
                    const aboutUsSection =
                      document.getElementById("about-us-section");
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

            <section
              id="about-us-section"
              className="min-h-screen max-h-screen bg-[#f2f9fb] relative z-10 shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px]"
            >
              <Image
                src="/Pic_1.jpg"
                alt="Pic1"
                width={1600}
                height={900}
                className="absolute top-0 left-0 opacity-30 blur-sm z-0 w-full h-full object-cover"
              />
              <div className="relative z-10">
                <div className="flex pt-10 justify-center">
                  <a className="font-kanit font-semibold text-[86px] text-[#005844]">
                    About us
                  </a>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-[calc(100vh-10rem)]">
                {/* Background box */}
                <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-[#85B09A] opacity-20 border-2"></div>
                </div>

                {/* Text Section on the Left */}
                <div className="pl-5 pr-5 absolute top-[50%] right-[13%] -translate-y-1/2 w-[30%] max-w-[600px] z-20">
                  {" "}
                  {/* Add z-20 */}
                  <motion.div
                    className="flex flex-col justify-center space-y-4"
                    initial={{ x: "10%", opacity: 0 }} // Start off-screen to the left
                    whileInView={{ x: "0", opacity: 1 }} // Slide in to the current position
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Animation duration and easing
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <div>
                      <a className="font-kanit font-semibold text-[24px] xl:text-[48px] lg:text-[36px] text-[#005844]">
                        อี.จี.จี. คอร์เปอเรชั่น จำกัด{" "}
                      </a>

                      <a className="font-kanit font-extralight text-[16px] xl:text-[24px] lg:text-[20px] text-black">
                        เป็นผู้ผลิตบรรจุภัณฑ์พลาสติกและไบโอพลาสติกสำหรับอาหารและเครื่องดื่ม
                        ทั้งแบบ Rigid และ Flexible Packaging ภายใต้แบรนด์ต่างๆ
                        เช่น EGG, Klear และ EGG Biopak โดยมุ่งเน้นการพัฒนา Green
                        Plastic Products เพื่อรองรับแนวคิดเศรษฐกิจหมุนเวียน
                        (Circular Economy) และสิ่งแวดล้อมอย่างยั่งยืน.
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Image Section on the Right */}
                <div className="absolute top-[45%] left-[7%] -translate-y-1/2 w-[50%] max-w-[900px] z-10">
                  {" "}
                  {/* Add z-10 */}
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

                <div className="absolute top-[70%] left-[1%] scale-x-[-1] scale-y-[-1] -translate-y-1/2 w-[50%] max-w-[350px] z-30">
                  {" "}
                  {/* Add z-10 */}
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
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_1.jpg"
                    width={295}
                    height={295}
                    alt="Ad_1"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_2.jpg"
                    width={295}
                    height={295}
                    alt="Ad_2"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_3.jpg"
                    width={295}
                    height={443}
                    alt="Ad_3"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_4.jpg"
                    width={295}
                    height={295}
                    alt="Ad_4"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_5.jpg"
                    width={295}
                    height={295}
                    alt="Ad_5"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                {/* Duplicate set to enable seamless looping */}
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_1.jpg"
                    width={295}
                    height={295}
                    alt="Ad_1"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_2.jpg"
                    width={295}
                    height={295}
                    alt="Ad_2"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_3.jpg"
                    width={295}
                    height={443}
                    alt="Ad_3"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_4.jpg"
                    width={295}
                    height={295}
                    alt="Ad_4"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_5.jpg"
                    width={295}
                    height={295}
                    alt="Ad_5"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
              </div>
            </div>

            {/* Products Content */}
            <div className="flex flex-col z-0">
              <a className="flex justify-center font-kanit font-semibold text-[86px] text-[#005844]">
                Products
              </a>
              <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-5">
                เรามุ่งมั่นที่จะจัดหาผลิตภัณฑ์พลาสติกที่ยั่งยืนซึ่งมีคุณค่า
              </a>
              <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-7">
                ต่อผู้มีส่วนได้ส่วนเสียทั้งภายในและภายนอกทุกฝ่าย
              </a>
            </div>

            <div className="images-wrapper flex flex-col z-10 pr-4">
              {/* Two identical sets for seamless looping */}
              <div className="image-track-d mt-[-1700px]">
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_6.jpg"
                    width={295}
                    height={295}
                    alt="Ad_6"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_7.jpg"
                    width={295}
                    height={295}
                    alt="Ad_7"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_8.jpg"
                    width={295}
                    height={295}
                    alt="Ad_8"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_9.jpg"
                    width={295}
                    height={295}
                    alt="Ad_9"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_10.jpg"
                    width={295}
                    height={295}
                    alt="Ad_10"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_11.jpg"
                    width={295}
                    height={295}
                    alt="Ad_11"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                {/* Duplicate set to enable seamless looping */}
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_6.jpg"
                    width={295}
                    height={295}
                    alt="Ad_6"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_7.jpg"
                    width={295}
                    height={295}
                    alt="Ad_7"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_8.jpg"
                    width={295}
                    height={295}
                    alt="Ad_8"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_9.jpg"
                    width={295}
                    height={295}
                    alt="Ad_9"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_10.jpg"
                    width={295}
                    height={295}
                    alt="Ad_10"
                    className="rounded-3xl shadow-[rgba(0,0,0,0.2)_7px_5px_12px_0px]"
                  />
                </div>
                <div className="pb-10">
                  <Image
                    src="/main_adpic/Ad_11.jpg"
                    width={295}
                    height={295}
                    alt="Ad_11"
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen max-h-screen bg-[#f2f9fb] relative z-10 shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px]">
            <Image
              src="/Pic_1.jpg"
              alt="Pic1"
              width={1600}
              height={900}
              className="absolute top-0 left-0 opacity-30 blur-sm z-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col justify-center items-center">
              <a className="font-kanit font-semibold text-[86px] text-[#005844] pt-10">
                Videos
              </a>
              <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-5">
                ชมวิดีโอโฆษณาที่ถ่ายทอดเรื่องราวของแบรนด์และผลิตภัณฑ์ของเรา
              </a>
              <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-7">
                สะท้อนคุณภาพ นวัตกรรม และความมุ่งมั่นสู่ความยั่งยืน
              </a>

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
              <a className="font-kanit font-semibold text-[86px] text-[#005844] pt-20">
                More from us
              </a>
              <a className="flex justify-center font-kanit text-[24px] text-black -translate-y-5">
                เว็บไซต์ในเครือของเรา
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[calc(100vh-10rem)]">
              <div className="flex flex-row h-[calc(100vh-10rem)] items-center justify-evenly">
                <a
                  href="https://www.porsiriplastic.com/"
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src="/PSIRIPLASTIC_logo.png"
                    width={295}
                    height={295}
                    alt="PH"
                  />
                  <span className="flex justify-center font-kanit text-[48px] text-black -translate-y-5 pt-10">
                    Porsiri Plastic
                  </span>
                </a>

                <a
                  href="https://www.eggbiopak.com/home"
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src="/LOGO EGG.png"
                    width={295}
                    height={295}
                    alt="PH"
                  />
                  <span className="flex justify-center font-kanit text-[48px] text-black -translate-y-5 pt-10">
                    Egg Biopak
                  </span>
                </a>

                {/* <a href="#" className="flex flex-col items-center text-center">
                  <Image
                    src="/PlaceHolder.png"
                    width={295}
                    height={295}
                    alt="PH"
                  />
                  <span className="flex justify-center font-kanit text-[48px] text-black -translate-y-5 pt-10">
                    Lidstory
                  </span>
                </a> */}
              </div>
            </div>
          </section>

          <Footer />
          <ScrollToTopButton />
        </div>
      </main>
    </ParallaxProvider>
  );
}
