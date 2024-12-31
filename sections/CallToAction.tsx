'use client';
import React, { useRef } from "react";
import ArrowRight from "@/public/assets/arrow-right.svg";
import startImage from '@/public/assets/star.png'
import springImage from '@/public/assets/spring.png'
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion'

const CallToAction = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref = {sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign Up For Free Today</h2>
        <p className="section-description mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <motion.img 
        style={{
          translateY
        }}
        src = {startImage.src} alt="Star Image" width={360} className="absolute -left-[350px] -top-[137px]"/>
        <motion.img 
         style={{
          translateY
        }}
        src = {springImage.src} width={360} alt="srping image" className="absolute -right-[331px] -top-[19px]"/>
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
