"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800">
              Hello, I'm
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Mansa",
                1000,
                "commited",
                1000,
                "reliable",
                1000,
                "A Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg text-lg mb-6 lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            animi ut atque quod omnis vitae ipsam tempore, dolor totam veniam
            inventore voluptatem nam fugit laudantium aspernatur? In soluta
            aperiam blanditiis.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/OIG.jpg"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
