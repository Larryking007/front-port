"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault;
    const data = {
      email: e.target.value,
      subject: e.subject.value,
      message: e.target.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    //for the request of sending data to the server.
    const options = {
      // The method is post because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "content-Type": "application/json",
      },
      //Body of the request is the JSON data created.
      Body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message is sent.");
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white mb-2 block text-sm font-medium "
            >
              Your Email
            </label>
            <input
              name="email"
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
              name="subject"
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
          <button className="bg-secondary-500 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
