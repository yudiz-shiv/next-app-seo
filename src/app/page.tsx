"use client";

import Typed from "react-typed";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-5">
        Hello Next js 14 SEO <code className="bg-red-200">Metadata</code>
      </h1>
      <Typed
        strings={[
          "Front End Developer",
          "UI Developer",
          "React JS Developer",
          "Next JS Developer",
        ]}
        typeSpeed={100}
        className="text-3xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-500 md:text-start"
      />
    </div>
  );
}
