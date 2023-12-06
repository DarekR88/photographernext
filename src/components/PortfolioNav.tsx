"use client";

import Link from "next/link";

export function PortfolioNav() {
  return (
    <>
      <div className="max-w-[1200px] text-center m-auto mt-4 mb-4 lg:mb-9 gap-3 flex lg:justify-center flex-col lg:flex-row lg:gap-10">
        <Link href={"/portfolio"}>All</Link>
        <Link href={"/portfolio/weddingsevents"}>Weddings & Events</Link>
        <Link href={"/portfolio/headshots"}>Head Shots</Link>
        <Link href={"/portfolio/familyportraits"}>Family Portraits</Link>
      </div>
    </>
  );
}
