"use client";

import Image from "next/image";
import React, { useState, ReactNode } from "react";
import Link from "next/link";

type ModeSelectProps = {
  children?: ReactNode;
};

export function ModeSelect({ children }: ModeSelectProps) {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <body className={`${isDark ? "text-white bg-black" : "text-black bg-white"}`}>
        {children}
      </body>
    </>
  );
}
