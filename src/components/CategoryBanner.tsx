import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryBanner() {
  // Banner data with descriptions
  const bannerData = [
    {
      href: "/products-list#bags-section",
      image: "/EGG_banner.png",
      title: "ถุงพลาสติก",
      description: "ถุงพลาสติกคุณภาพสูงสำหรับบรรจุภัณฑ์สินค้าของคุณ",
    },
    {
      href: "/products-list#cups-section",
      image: "/EGG_banner.png",
      title: "แก้วและฝา",
      description: "แก้วและฝากาแฟและเครื่องดื่มต่างๆ",
    },
    {
      href: "/products-list#compostable-section",
      image: "/EGG_banner.png",
      title: "ผลิตภัณฑ์ย่อยสลายได้",
      description: "ผลิตภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อมและย่อยสลายได้",
    },
    {
      href: "/products-list#service-section",
      image: "/EGG_banner.png",
      title: "บริการ OEM",
      description: "บริการออกแบบและผลิตตามความต้องการของคุณ",
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto my-16 space-y-6">
      {bannerData.map((banner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          viewport={{ once: true, amount: 0 }}
        >
          <Link
            href={banner.href}
            className="block relative group overflow-hidden rounded-lg"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-40 object-cover shadow-md group-hover:scale-[1.02] transition-transform"
            />

            {/* Title overlay */}
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <span className="font-kanit text-3xl font-semibold text-black drop-shadow-lg">
                {banner.title}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
