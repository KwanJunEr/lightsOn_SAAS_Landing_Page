import React from "react";
import ArrowRight from "@/public/assets/arrow-right.svg";
import startImage from '@/public/assets/star.png'
import springImage from '@/public/assets/spring.png'
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign Up For Free Today</h2>
        <p className="section-description mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <Image src = {startImage} alt="Star Image" width={360} className="absolute -left-[350px] -top-[137px]"/>
        <Image src = {springImage} width={360} alt="srping image" className="absolute -right-[331px] -top-[19px]"/>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get For Free</button>
          <button className="btn btn-text gap-1">
            <span> Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
