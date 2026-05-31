import Image from "next/image";

export default function TopBanner({ title }: { title?: string }) {
  return (
    <div className="absolute top-0 left-0 w-full z-[-6] h-[50vh] overflow-hidden bg-[#fafeff]">
      <div
        className="absolute top-0 left-0 w-full h-[50vh] z-[-5] bg-[url('/Pic_1.jpg')] bg-cover bg-no-repeat opacity-30 blur-sm"
        style={{
          backgroundPosition: "center -100px", // moves image up
        }}
      />

      <div className="absolute top-0 left-0 w-full h-[50vh] flex items-center justify-center">
        <h1 className="absolute font-kanit font-semibold text-[86px] text-[#005844]">
          {title || null}
        </h1>
      </div>

      <Image
        src="/Pic_2.svg"
        width={256}
        height={256}
        alt="Top Left Decoration"
        className="absolute -top-20 left-20 w-1/6 h-auto rotate-[160deg]"
      />
    </div>
  );
}
