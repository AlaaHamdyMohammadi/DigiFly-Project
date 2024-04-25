"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  const router = useRouter();
  const t = useTranslations("Header");
  const [isActive, setIsActive] = React.useState<number | undefined>(undefined);

  const handleClick = (index: number) => {
    setIsActive(index);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    //console.log(event.target.value);
    router.replace(`/${selectedValue}`);
    // setSelectedLanguage(selectedValue);
  };

  const items = ["Home", "Categories", "Contact us", "About"];

  return (
    <main className="h-[88px] pt-4 px-[80px] gap-[30px] flex items-center justify-between">
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
                  {t(`${item}`)}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        {/* <select onChange={handleSelectChange}>
          <option className="flex items-center gap-2" value="en">
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
          </option>
          <option className="flex items-center gap-2" value="ar">
            <h6 className="text-sm font-medium">En</h6>
            <div className="w-6 h-6 relative">
              <Image
                src={"/EgyptFlag.png"}
                alt="EgyptFlag"
                objectFit="cover"
                layout="fill"
                className="rounded-full"
              />
            </div>
          </option>
        </select> */}
        <LanguageSwitch/>
      </section>
    </main>
  );
};

export default Header;
