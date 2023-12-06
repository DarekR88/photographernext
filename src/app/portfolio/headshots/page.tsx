"use client";

import Link from "next/link";
import Image from "next/image";
import { PortfolioNav } from "@/components/PortfolioNav";
import BalloonImage from "../../../../public/images/ziphaus-dQyfiYNJoHw-unsplash.jpg";
import CoupleImage from "../../../../public/images/payton-tuttle-RFFR1JjkJx8-unsplash.jpg";
import GraduationImage from "../../../../public/images/ivan-kazlouskij-gKR4mOceulU-unsplash.jpg";
import FamilyImage from "../../../../public/images/bibek-thakuri-FzYWk0MPmdw-unsplash.jpg";

export default function HeadShots() {
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
