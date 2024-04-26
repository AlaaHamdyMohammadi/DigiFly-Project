'use client';

import { useCurrentEditor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Underline,
  Italic,
  Code,
  Link,
  List,
  Heading,
  Undo,
  Redo,
  Quote,
  BoldIcon,
} from "lucide-react";

const Toolbar = () => {
  const {editor} = useCurrentEditor();

  if(!editor) return null;

    return (
      <section className="flex gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-[#49BD88] text-white" : ""}
        >
          <BoldIcon className="w-4 h-4" /> Bold
        </button>
      </section>
    );
}

export default Toolbar