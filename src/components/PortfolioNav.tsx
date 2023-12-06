"use client";

import Link from "next/link";

export function PortfolioNav() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-screen text-center">
        <Link href={"/portfolio/weddingsevents"}>Weddings & Events</Link>
        <Link href={"/portfolio/headshots"}>Head Shots</Link>
        <Link href={"/portfolio/familyportraits"}>Family Portraits</Link>
      </div>
    </>
  );
}
