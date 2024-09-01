"use client";
import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { PinContainer } from "../../components/ui/3d-pin";

import Stacksaway from "../../components/SVGs/Stacksaway";

export default function page() {
  return (
    <div className="min-h-screen bg-hero-pattern bg-cover bg-center">
      <Navbar />
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-12 font-sans z-10">
      <div className="pt-5 text-lg  xl:text-sm 2xl:text-lg space-y-">
        <p>
          In my journey to becoming a Data Scientist, I've worked on a variety of projects that showcase my skills in data analysis, machine learning, and statistical modeling. Each project has provided me with valuable experience in handling real-world data, uncovering insights, and developing predictive models. Below are some of the key projects I have completed, highlighting my ability to tackle complex problems and create impactful solutions.
          </p>
        </div>
        <br />
        Latest Projects
        <div className="pt-5 text-lg  xl:text-sm 2xl:text-lg space-y-">
          <p className="pb-2 ">
            Currently working on a  
            <span className="text-light-gray font-semibold ">{" "}Speech Emotion Recognisition </span> 
            using<span className="text-light-gray font-semibold ">
              {" "}
              Deep Learning
            </span>
          </p>
          <p>
            Meanwhile check out these projects, latest being{" "}
            <span className="text-light-gray font-semibold "> Dashboard Hub</span>.
          </p>
        </div>
      </div>

      <div className="flex justify-center mr-96 flex-col font-cabinG md:flex-row ">
        <div className="h-[30rem] w-full flex items-center justify-center mr-[30rem]  ml-[12rem] md:mx-[10rem] lg:ml-[50rem]">
          <PinContainer
            title="Visit Code"
            href="https://github.com/Subhajit0210/Customer_Segmentation_using_Machine_Learning"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Customer Segmentation using Machine Learning
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                Understanding customer behaviors improves marketing and experience.
                </span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500
                via-orange-300
                to-yellow-300
              "
              ></div>
            </div>
          </PinContainer>
        </div>
        <div className="h-[30rem] w-full flex items-center justify-center mr-[10rem]  ml-[12rem] md:mt-[10rem] md:mx-[10rem] lg:mr-[50rem] lg:ml-[-10rem]">
          <PinContainer
            title="Visit Dashboard"
            href=" https://github.com/Subhajit0210/Dashboard-Hub"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Dashboard Hub
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  
Interactive dashboards for visualizing and analyzing data trends and metrics.
                </span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500
               via-orange-300
               to-yellow-300
              "
              ></div>
            </div>
          </PinContainer>
        </div>

        <div className="h-[30rem] w-full flex items-center justify-center mr-[10rem] ml-[12rem] md:mx-[10rem] lg:ml-[-50rem] lg:mr-[40rem] xl:mr-[25rem]">
          <PinContainer
            title="Visit Code"
            href="https://github.com/Subhajit0210/Company-Sales-Data-Prediction-Using-Machine-Learning"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Company Sales Prediction Model
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Machine Learning Model for predicting company sales
                </span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500
               via-orange-300
               to-yellow-300"
              ></div>
            </div>
          </PinContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
