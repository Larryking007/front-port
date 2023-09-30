import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl">
            Hello, I'm Mansa
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            animi ut atque quod omnis vitae ipsam tempore, dolor totam veniam
            inventore voluptatem nam fugit laudantium aspernatur? In soluta
            aperiam blanditiis.
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-500 h-400">
            <Image
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
