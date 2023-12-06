"use client";

import Link from "next/link";
import Image from "next/image";
import { PortfolioNav } from "@/components/PortfolioNav";
import BalloonImage from "../../../../public/images/national-cancer-institute-BQPi8F_UON0-unsplash.jpg";
import CoupleImage from "../../../../public/images/nathan-dumlao-Wr3comVZJxU-unsplash.jpg";
import GraduationImage from "../../../../public/images/nikola-saliba-BonFa3wUrnU-unsplash.jpg";
import FamilyImage from "../../../../public/images/jimmy-dean-Yl7Y8DhyzyY-unsplash.jpg";

export default function FamilyPortraits() {
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
