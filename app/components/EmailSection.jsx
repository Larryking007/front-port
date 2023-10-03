import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className=""></div>
      <div>
        <h5 className="text-xl font-bold text-white my-12">Let's Connect</h5>
        <p className="text-[#ADB98E] mb-4 max-w-md">
          I'm currently looking for opportunities, my inbox is always open.
          Wether you have a question or just want to say hello, I'll do well to
          respond.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Larryking007"}>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={"https://linkedin.com/in/olanrewajumusa"}>
            <Image src={LinkedInIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white mb-2 block text-sm font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border-[#3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@yahoo.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border-[#3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="say something nice"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="let's talk about ...."
            />
          </div>
          <button className="bg-[#009efd] hover:bg-sky-500 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
