"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Smart Backspace First",
        "Smart Backspace Second",
        "Candy",
        "More Strings",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-5">
        Hello Next js 14 SEO <code className="bg-red-200">Metadata</code>
      </h1>
      <div>
      <h1 ref={el}></h1>
      </div>
    </div>
  );
}
