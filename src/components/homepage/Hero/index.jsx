import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/images/hero.png";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="mb-10 object-cover object-center rounded"
          alt="hero"
          width={150}
          height={150}
          src={HeroImg}
        />
        <div className="text-center lg:w-2/4 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-balance">
            Master Your Knowledge with Quiz Master!
          </h1>
          <p className="mb-8 leading-relaxed">
            The Ultimate Quiz App to Test and Expand Your Knowledge
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
