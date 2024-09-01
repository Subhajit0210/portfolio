import React from "react";

import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

import { SiNextdotjs, SiContentful, SiVercel, SiPostman } from "react-icons/si";
import { FaReact, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";


import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { FaDocker } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

export default function page() {
  return (
    <div className=" bg-hero-pattern bg-cover bg-center ">
      <Navbar />
      <div className="text-3xl xl:text-4xl px-8 xl:px-32 2xl:px-96 pt-14 pb-6 font-bold  font-cabinG ">
        <span className="inline-block md:inline">About </span>
        <span className="block md:inline"> Subhajit Sikder</span>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-8 xl:pt-6 font-cabinG z-10">
        About Me
        <div className="pt-5 text-lg font-sans  xl:text-sm 2xl:text-lg space-y-8">
            {/* <p className="pb-2 ">
              Hey there, I am
              <span className="text-light-gray font-semibold ml-1">
                Subhajit Sikder
              </span>
              , an upcoming Backend Developer Intern over at
              <span className="text-light-gray font-semibold"> IbArts </span>!
              Started off smitten with front-end in tech, but soon realized that
              the backend is where the real magic happens.
            </p> */}
          <p className="pb-2">
          As an aspiring <span className="text-light-gray font-semibold ml-1"> Data Scientist </span>, I am passionate about uncovering patterns and insights hidden within data. My journey into the world of data began with a fascination for how numbers can tell stories and drive decisions. I am currently honing my skills in data analysis, machine learning, deep learning, and statistical modeling with a strong foundation in <span className="text-light-gray font-semibold ml-1"> Python </span> and <span className="text-light-gray font-semibold ml-1"> SQL </span>
          </p>
          <p>
          Currently, I am pursuing my post-graduation in Computer Application degree in Kolkata 
          </p>
          <br />
          
          <p className="text-xl font-cabinG">
            Personally love exploring technologies in my free time, have something cool brewing? Hit me up , lets work together!
          </p>
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96 text-base xl:text-2xl pt-12 xl:pt-6 font-cabinG z-10">
        Professional Skillset
        <div className="flex  pt-8 text-lg xl:text-sm 2xl:text-lg">
          <div className="flex space-x-3">
          <FaPython size={30} />
          <SiOracle size={30} />
          <SiPandas size={30} />
          <SiNumpy size={30} />
           
          </div>
          <div className="flex pl-4 space-x-3">
            <FaGitAlt size={30} />
            <SiScikitlearn size={40} />
          </div>
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96 text-base xl:text-2xl pt-8 xl:pt-6 font-cabinG z-10">
        Tools
        <div className="flex items-center pt-8 text-lg xl:text-sm 2xl:text-lg">
          <div className="flex space-x-3">
          <SiJupyter size={30} />
          <SiPowerbi size={25} />
            
          </div>
          <div className="flex pl-4 space-x-4">
            
            <TbBrandVscode size={30} />
            <FaGithub size={25} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
