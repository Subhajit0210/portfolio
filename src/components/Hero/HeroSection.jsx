"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Hero } from "../SVGs/Hero";

import { GoArrowUpRight } from "react-icons/go";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center gap-x-20 2xl:px-96 pt-12 z-10">
        <div className=" w-screen  xl:w-7/12 2xl:w-11/12">
          <Hero />
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-12 font-sans z-10">
        About Me
        <div className="pt-5 text-lg  xl:text-sm 2xl:text-lg space-y-">
          <p className="pb-2 ">
            Hey there, I am
            <span className="text-light-gray font-semibold ml-1">
              Subhajit Sikder
            </span>
            , an aspiring Data Scientist with a passion for transforming data into actionable insights. I specialize in <span className="text-light-gray font-semibold"> data analysis, machine learning, deep learning, and statistical modelling </span> using tools like
            <span className="text-light-gray font-semibold"> Python </span>.
            <br></br>
            <br />
            I have hands-on experience in analysing datasets, building predictive models, and visualizing complex information. I enjoy working on projects that allow me to apply my knowledge and creativity to real-world challenges. I am especially interested in the fields of some AI-driven solutions, where data can make a significant impact. {""}
          </p>
        </div>
        <div className="flex flex-row">
          <Link href="/about">
            <p className="flex items-center text-lg xl:text-sm 2xl:text-lg pt-5 text-accent hover:text-primary">
              <span className="underline xl:text-xl hover:text-light-gray">
                Read More
              </span>
              <span className="group relative overflow-hidden h-fit w-fit ml-2">
                <GoArrowUpRight
                  size={22}
                  className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]"
                />
                <GoArrowUpRight
                  size={22}
                  className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]"
                />
              </span>
            </p>
          </Link>
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-12 font-sans z-10">
        Latest Project
        <div className="pt-5 text-lg  xl:text-sm 2xl:text-lg space-y-">
          <p className="pb-2 ">
            <span className="text-light-gray font-semibold">Dashboard Hub</span> is
            a collection of interactive dashboards for  <span className="text-light-gray font-semibold">  visualizing </span> and  <span className="text-light-gray font-semibold">analyzing data trends </span> and  <span className="text-light-gray font-semibold"> key metrics </span>. This repository includes custom-built dashboards for popular streaming platforms like Netflix, Amazon Prime Video and Disney+ Hotstar. Each dashboard provides deep insights into content performance, user engagement, and other important metrics.
          </p>
        </div>
      </div>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-semibold text-neutral-600 dark:text-white font-cabinG"
          >
            Dashboard Hub
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 font-cabinG dark:text-neutral-300"
          >
            A collection of interactive dashboards for visualizing and analyzing data trends and key metrics
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src="/assets/dashboard.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as={Link}
              href="https://github.com/Subhajit0210/Dashboard-Hub"
              className="px-4 py-2 rounded-xl text-xs font-normal font-cabinG font-semibold dark:text-white"
            >
              Check Out →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
100;
