"use client";

import Tiptap from "./Tiptap";



const TextEditor = () => {
  return (
    <main className=" h-536px my-[120px] mx-[80px] gap-20 border rounded-sm">
      {/* <section className="flex justify-between">
        <h1>Hello</h1>
        <h1>Hello</h1>
      </section> */}
      <Tiptap/>
    </main>
  );
};

export default TextEditor;
