"use client";

import React from "react";
import { useTranslations } from "next-intl";

// interface ContentProps {
//   translationKey: string;
//   title: string;
//   description: string;
// }

const Content = () => {
  const t = useTranslations("PartThree");
  return (
    <section className="width-[1021px] h-[149px] gap-8 px-[80px] py-[120px]">
      <div className="flex items-center gap-4">
        <div className="w-16 h-1 rounded-full bg-secondary"></div>
        <h1 className="font-bold text-[32px] text-gray-900">{t("title")}</h1>
        {/* <h1 className="font-bold text-[32px] text-gray-900">{t(title)}</h1> */}
      </div>
      <div className="w-[1021px] h-[67px] mt-3">
        <p className="font-normal text-lg text-gray-600">{t("description")}</p>
        {/* <p className="font-normal text-lg text-gray-600">{t(description)}</p> */}
      </div>
    </section>
  );
};

export default Content;
