import Link from "next/link";

export default function CategorySelector({
  selectedCategory,
}: {
  selectedCategory: number | null;
}) {
  return (
    <div className="w-full bg-[#F9F6F1] shadow-[rgba(0,0,12,0.2)_0px_0px_60px_0px] px-10 py-4 relative z-10">
      <div className="flex justify-center px-20 gap-14">
        {[
          {
            icon: "/home-button.png",
            label: "สินค้าทั้งหมด",
            href: "/products-list",
          },
          {
            icon: "/plastic-bag-icon.png",
            label: "ถุงพลาสติก",
            href: "/products-list#bags-section",
          },
          {
            icon: "/coffee-cup-icon.png",
            label: "แก้วและฝา",
            href: "/products-list#cups-section",
          },
          {
            icon: "/dish-icon.png",
            label: "ผลิตภัณฑ์ EGG",
            href: "/products-list#compostable-section",
          },
          {
            icon: "/leaves-icon.png",
            label: "บริการ OEM",
            href: "/products-list#service-section",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center py-1.5 relative group"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12 mb-2 transition-transform duration-200 group-hover:scale-110"
            />

            {/* Text */}
            <span className="font-kanit text-md text-black text-center px-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {item.label}
            </span>

            <div
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-black transition-transform duration-300 origin-center ${selectedCategory === index ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
