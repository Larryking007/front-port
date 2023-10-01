import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src={"/images/541953.png"} width={500} height={500} />
      </div>
      <div>
        <h2>About Me</h2>
        <p></p>
      </div>
    </section>
  );
};

export default AboutSection;