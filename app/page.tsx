import Image from "next/image";
import React from "react";
import { portfolio } from "../utils/constants";
// import profile from "public/profile.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <section
        id="introduction"
        className={"flex flex-col items-stretch text-center"}
      >
        <h2 className={"text-3xl mb-8"}>{"👋 Hello there!"}</h2>
        <p>{"My name is"}</p>
        <h3 className={"text-2xl mb-8"}>{"Aleksei Kovalev"}</h3>
        {/* Temporary replacement for picture */}
        <div
          className={"w-36 h-36 bg-slate-500 rounded-full mb-8 self-center"}
        ></div>
        {/* <Image
          src={profile}
          alt={"Aleksei's profile"}
          width={150}
          className={"rounded-full mb-8 self-center"}
        /> */}
        <p>
          {"I am a web developer with more than"}
          <span className={"font-semibold"}>{" 4 years of experience "}</span>
          {
            "in the front-end and this is my personal website where I share with you the projects I've worked on as well as some general knowledge in my blog. Be sure to check it out!"
          }
        </p>
      </section>
      <section
        id="portfolio"
        className={"mt-20 pt-20 border-t-2 border-gray-300"}
      >
        <div>
          {Object.entries(portfolio).map(([category, items], i) => (
            <div key={i} className={"mb-16"}>
              <h1 className={"font-semibold text-2xl text-center mb-4"}>
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </h1>
              <ul className={"flex flex-wrap justify-center space-x-2"}>
                {items.map((item, i) => (
                  <li
                    key={i}
                    className={
                      "border-gray-400 border-2 min-w-fit mb-2 px-4 py-2 text-center"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
