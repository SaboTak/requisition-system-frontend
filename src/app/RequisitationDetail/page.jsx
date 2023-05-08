"use client";
import Image from "next/image";
import SignoMomentaneo from "../source/signo.jpg";
import { BiChevronLeft } from "@react-icons/all-files/bi/BiChevronLeft";
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";
import ProgressBar from "../components/ProgressBar";
import {  useEffect, useState } from "react";

export default function Requisitation(params) {

  const [activeFirms, setActiveFirms] = useState(false);
  
  const myItems = ["item 1", "item 2", "item 3"];
  const countSteps = 4;

  return (
    <div className="fontPoppins bg-mi-gama-200 h-screen">
      <div className="grid grid-cols-2 gap-5 grid-span-1 h-full">
        {/* Left part */}
        <div className="w-full bg-mi-gama-50 p-8 h-full">
          <div>
            <Image alt="Decanatura" className="mx-auto p-3 pb-5" src={SignoMomentaneo} />
          </div>

          <div className="w-full text-justify text-white">
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              dignissimos quaerat error harum omnis aliquid et. Dolor quo
              ducimus blanditiis cumque sed ex alias perspiciatis. Ipsam enim
              inventore corrupti voluptate! Dolorem laborum architecto qui, ipsa
              sunt cum labore harum quis omnis nostrum perferendis adipisci
              repellendus accusamus molestiae libero amet consequuntur quibusdam
              quisquam! Odio voluptates incidunt quam enim modi quis aliquid?
              Dolor eum debitis officiis cupiditate numquam delectus,
              recusandae, laboriosam, dolores voluptatibus eos voluptas.
              Dignissimos fuga impedit voluptatum quae! Distinctio itaque at
              quidem laborum suscipit aperiam amet quia ad molestiae maxime?
            </p>
          </div>

          <div className="text-center m-5">
            <button
              className="text-white bg-mi-gama-300 px-5 py-2 rounded hover:font-bold hover:bg-mi-gama-400"
              type="submit">
              FIRMAR
            </button>
          </div>

          <button className="absolute top-2 left-3 text-white" type="submit">
            {" "}
            <h1 className="text-2xl">
              <BiChevronLeft />
            </h1>
          </button>
        </div>

        {/* Right part 1 (Top cards)*/}
        <div className=" text-center w-full h-full bg-mi-gama-200 py-10 pr-5">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="font-bold border-mi-gama-50">
              <h1>Inicial Date</h1>
              <h1>01/01/23</h1>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="text-white bg-mi-gama-50 outline-none outline-black rounded-full my-auto p-2 cursor-default font-bold">
                In progress
              </button>
            </div>

            <div className="font-bold border-mi-gama-50">
              <h1>Last Date</h1>
              <h1>04/04/23</h1>
            </div>
          </div>

          {/* Progress Bar*/}
          <div className="my-8">
            <ProgressBar items={myItems} countSteps={countSteps} />
          </div>

          {/* Records */}
          <div className="bg-mi-gama-200 text-start w-full  ">
            <h1 className="text-black rounded inline-block pr-2 mt-5 mb-2">
              Records
              <button className={`text-2xl inline-block absolute ${activeFirms == true ? 'transition duration-1000 transform focus:rotate-90' : 'transition duration-1000 transform focus:rotate--90'}`} >
                <BiChevronRight  onClick={() => {setActiveFirms(!activeFirms)}} className="" />
              </button>
            </h1>
          </div>
          <div className={`grid grid-cols-3 gap-3 mb-3 text-center ${activeFirms == true ? 'block' : 'hidden'}`}>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
            <div className="bg-mi-gama-50 text-white border-2 rounded-xl border-mi-gama-50 p-3">
              <h1 className="font-extrabold">Juanito Perez</h1>
              <h1>Decanatura</h1>
              <h1>Fecha</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
