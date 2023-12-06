"use client";

import Link from "next/link";
import Image from "next/image";
import { PortfolioNav } from "@/components/PortfolioNav";
import BalloonImage from "../../../public/images/balloon-kyle-hinkson-xyXcGADvAwE-unsplash.jpg";
import CoupleImage from "../../../public/images/eugenivy_now-1Bs2sZ9fD2Q-unsplash.jpg";
import GraduationImage from "../../../public/images/rut-miit-3EMw3T-ZjkE-unsplash.jpg";
import FamilyImage from "../../../public/images/jessica-rockowitz-5NLCaz2wJXE-unsplash.jpg";

export default function Portfolio() {
  return (
    <>
      <PortfolioNav />
      <div className="max-w-[1200px] flex flex-col m-auto lg:gap-6 lg:mb-6">
        <div className="lg:w-[1200px] lg:h-[800px] overflow-hidden">
          <Image src={BalloonImage} alt="balloons" className="object-cover" />
        </div>
        <div className="lg:w-[1200px] lg:h-[800px] overflow-hidden">
          <Image src={CoupleImage} alt="balloons" className="object-cover" />
        </div>
        <div className="lg:w-[1200px] lg:h-[800px] overflow-hidden">
          <Image src={FamilyImage} alt="balloons" className="object-cover" />
        </div>
        <div className="lg:w-[1200px] lg:h-[800px] overflow-hidden">
          <Image src={GraduationImage} alt="balloons" className="object-cover" />
        </div>
      </div>
    </>
  );
}
