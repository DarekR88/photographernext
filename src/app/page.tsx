"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WeddingImage from "../../public/images/leonardo-miranda-riHGdvluDk8-unsplash.jpg";
import WomanImage from "../../public/images/tamara-bellis-2Tv7-O13hgk-unsplash.jpg";
import FamilyImage from "../../public/images/jonathan-borba-DUrU_bZV8So-unsplash.jpg";

export default function Home() {
  const [isBigOne, setIsBigOne] = useState(true);
  const [isBigTwo, setIsBigTwo] = useState(false);
  const [isBigThree, setIsBigThree] = useState(false);

  const handleHoverOne = () => {
    setIsBigOne(true);
    setIsBigTwo(false);
    setIsBigThree(false);
  };

  const handleHoverTwo = () => {
    setIsBigTwo(true);
    setIsBigOne(false);
    setIsBigThree(false);
  };

  const handleHoverThree = () => {
    setIsBigThree(true);
    setIsBigTwo(false);
    setIsBigOne(false);
  };

  return (
    <>
      <div className="max-w-[1200px] flex flex-col gap-3 lg:gap-0 lg:flex-row m-auto mt-3 lg:mt-4">
        <div
          onMouseEnter={handleHoverOne}
          className={`overflow-hidden z-0 w-screen ${
            isBigOne
              ? "lg:transition-all ease-in-out lg:w-1/2 lg:duration-500"
              : "lg:transition-all ease-in-out lg:w-1/4 lg:duration-500"
          }`}
        >
          <Link href={"/portfolio/weddingsevents"}>
            <p
              className={`h-[28px] lg:mb-2 ${
                isBigOne
                  ? "lg:transition-all ease-in-out lg:text-3xl lg:duration-500"
                  : "lg:transition-all ease-in-out lg:text-xl lg:duration-500"
              }`}
            >
              Weddings & Events
            </p>
            <Image
              src={WeddingImage}
              alt="stars"
              className="h-[400px] object-cover"
            />
          </Link>
        </div>
        <div
          onMouseEnter={handleHoverTwo}
          className={`overflow-hidden ${
            isBigTwo
              ? "lg:transition-all ease-in-out lg:w-1/2 lg:duration-500"
              : "lg:transition-all ease-in-out lg:w-1/4 lg:duration-500"
          }`}
        >
          <Link href={"/portfolio/headshots"}>
            <p
              className={`h-[28px] lg:mb-2 ${
                isBigTwo
                  ? "lg:transition-all ease-in-out lg:text-3xl lg:duration-500"
                  : "lg:transition-all ease-in-out lg:text-xl lg:duration-500"
              }`}
            >
              Head Shots & Modeling
            </p>
            <Image
              src={WomanImage}
              alt="balloons"
              className="h-[400px] object-cover"
            />
          </Link>
        </div>
        <div
          onMouseEnter={handleHoverThree}
          className={`overflow-hidden ${
            isBigThree
              ? "lg:transition-all ease-in-out lg:w-1/2 lg:duration-500"
              : "lg:transition-all ease-in-out lg:w-1/4 lg:duration-500"
          }`}
        >
          <Link href={"/portfolio/familyportraits"}>
            <p
              className={`h-[28px] lg:mb-2 ${
                isBigThree
                  ? "lg:transition-all ease-in-out lg:text-3xl lg:duration-500"
                  : "lg:transition-all ease-in-out lg:text-xl lg:duration-500"
              }`}
            >
              Family Portraits
            </p>
            <Image
              src={FamilyImage}
              alt="street"
              className="h-[400px] object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="flex max-w-[1200px] m-auto px-3 my-4 text-center justify-center lg:my-9">
        <div className="relative"></div>
        <div className="hidden lg:block lg:absolute z-0 lg:h-[176px] lg:w-[650px] lg:bg-bg-tertiary lg:border-2 lg:border-black"></div>
        <p className="py-3 lg:py-10 lg:w-[600px] z-10">
          <span>A</span>t Insight photography we capture the highest quality
          images from the best angles for any event. You never have to worry
          about missing a precious moment. If you're looking for family
          portraits, look no more. Take your family photos in your own home. We
          bring the studio to you.
        </p>
      </div>
    </>
  );
}
