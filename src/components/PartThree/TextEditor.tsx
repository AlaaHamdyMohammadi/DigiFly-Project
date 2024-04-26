"use client";

import { useState } from "react";
import Tiptap from "./Tiptap";

const TextEditor = () => {
  //const content = "نها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال."
  const [content, setContent] = useState<string>("");
  const handleContentChange = (word: string) => {
    setContent(word);
  };
  return (
    <main className=" h-536px my-[120px] mx-[80px] gap-20 border border-[rgba(109, 92, 188, 0.1)] rounded-sm">
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />

      {/* <section className="h-[243px] p-10 gap-[10px]">
        <p className="font-medium text-base w-[1162px]">
          {content}
        </p>
      </section> */}
    </main>
  );
};

export default TextEditor;
