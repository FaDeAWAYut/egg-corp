import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative min-h-[230px] max-h-screen bg-black shadow-[rgba(0,0,12,0.5)_0px_-10px_40px_0px] z-40">
      <div className="absolute flex flex-col top-[15%] left-[15%]">
        <div className="font-kanit text-[16px] text-white pb-2 tracking-wider">
          Lorem ipsum dolor sit amet,
        </div>
        <div className="font-kanit text-[16px] text-white pb-2 tracking-wider">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
        <div className="font-kanit text-[16px] text-white pb-5 tracking-wider">
          magna aliqua. Ut enim ad minim veniam, quis nostrud
        </div>

        <div className="flex flex-row">
          <Image src="/line_png.png" width={30} height={30} alt="line_white" className="mr-4" />
          <Image src="/facebook_png.png" width={30} height={30} alt="facebook_white" />
        </div>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </footer>
  );
}
