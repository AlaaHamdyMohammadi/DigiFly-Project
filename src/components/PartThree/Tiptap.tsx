"use client";

import { useCurrentEditor, EditorProvider } from "@tiptap/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BoldIcon, Italic } from "lucide-react";
import Toolbar from "./Toolbar";

const Tiptap = () => {
  
  const extensions = [StarterKit];
  const content = "<p>Hello World! 🌎️</p>";

  // const editor = useEditor({
  //   slotBefore: <Toolbar/>,
  //   extensions: [StarterKit],
  //   content: "<p>Hello World! 🌎️</p>",
  // });

  return <EditorProvider slotBefore={<Toolbar/>} extensions={extensions} content={content}>
    <></>
  </EditorProvider>;
};

export default Tiptap;
