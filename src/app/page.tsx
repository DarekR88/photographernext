"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WeddingImage from "../../public/images/leonardo-miranda-riHGdvluDk8-unsplash.jpg";
import WomanImage from "../../public/images/tamara-bellis-2Tv7-O13hgk-unsplash.jpg";
import FamilyImage from "../../public/images/nikola-saliba-BonFa3wUrnU-unsplash.jpg";

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
      <div className="max-w-[1200px] flex m-auto">
        <div
          onMouseEnter={handleHoverOne}
          className={`overflow-hidden z-0 ${
            isBigOne ? "transition-all ease-in-out w-1/2 duration-500" : "transition-all ease-in-out w-1/4 duration-500"
          }`}
        >
          <p className="text-black rounded-br-md bg-white px-2 absolute z-10">
            Weddings & Events
          </p>
          <Image
            src={WeddingImage}
            alt="stars"
            className="h-[400px] object-cover"
          />
        </div>
        <div
          onMouseEnter={handleHoverTwo}
          className={`overflow-hidden ${
            isBigTwo ? "transition-all ease-in-out w-1/2 duration-500" : "transition-all ease-in-out w-1/4 duration-500"
          }`}
        >
          <p className="text-black rounded-br-md bg-white px-2 absolute z-10">
            Head Shots & Modeling
          </p>
          <Image
            src={WomanImage}
            alt="balloons"
            className="h-[400px] object-cover"
          />
        </div>
        <div
          onMouseEnter={handleHoverThree}
          className={`overflow-hidden ${
            isBigThree ? "transition-all ease-in-out w-1/2 duration-500" : "transition-all ease-in-out w-1/4 duration-500"
          }`}
        >
          <p className="text-black rounded-br-md bg-white px-2 absolute z-10">
            Family Portraits
          </p>
          <Image
            src={FamilyImage}
            alt="street"
            className="h-[400px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
