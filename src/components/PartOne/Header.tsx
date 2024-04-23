"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState<number | undefined>(undefined);

  const handleClick = (index: number) => {
    setIsActive(index);
  };

  const items = ["Home", "Categories", "Contact us", "About"];

  return (
    <main className="h-[88px] pt-4 px-[80px] g-[30px] flex items-center justify-between">
      <section className="">
        <Image src="/logo.png" alt="logo" width={76.57} height={56} />
      </section>
      <section className="w-[844px]">
        <ul className="flex gap-4">
          {items.map((item, index) => {
            return (
              <li key={index} className="p-4 text-[16px] font-semibold">
                <Link
                  href="/"
                  style={{
                    color:
                      isActive === index ||
                      (isActive === undefined && index === 0)
                        ? "#49BD88"
                        : "#000000",
                  }}
                  onClick={() => handleClick(index)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="flex items-center gap-2">
        <h6 className="text-sm font-medium">العربية</h6>
        <div className="w-6 h-6 relative">
          <Image
            src={"/EgyptFlag.png"}
            alt="EgyptFlag"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </section>
    </main>
  );
};

export default Header;
