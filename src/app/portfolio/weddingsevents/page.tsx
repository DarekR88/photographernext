"use client";

import Link from "next/link";
import Image from "next/image";
import { PortfolioNav } from "@/components/PortfolioNav";
import PoolImage from "../../../../public/images/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg";
import DinnerImage from "../../../../public/images/al-elmes-ULHxWq8reao-unsplash.jpg";
import ClubImage from "../../../../public/images/nightclub-aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg";
import ConcertImage from "../../../../public/images/elena-de-soto-w423NnHFjFg-unsplash.jpg";

export default function WeddingsEvents() {
  return (
    <>
      <PortfolioNav />
      <div className="max-w-[1200px] flex flex-col m-auto lg:gap-6 lg:mb-6">
        <div className="lg:w-[1200px] lg:max-h-[800px] overflow-hidden">
          <Image src={PoolImage} alt="balloons" className="object-cover" />
        </div>
        <div className="lg:w-[1200px] lg:max-h-[800px] overflow-hidden">
          <Image src={DinnerImage} alt="balloons" className="object-cover" />
        </div>
        <div className="lg:w-[1200px] lg:max-h-[800px] overflow-hidden">
          <Image src={ConcertImage} alt="balloons" className="object-cover" />
        </div>
        <div className="lg:w-[1200px] lg:max-h-[800px] overflow-hidden">
          <Image src={ClubImage} alt="balloons" className="object-cover" />
        </div>
      </div>
    </>
  );
}
