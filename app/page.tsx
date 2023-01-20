import Image from "next/image";
import React from "react";
import { portfolio } from "../utils/constants";
// import profile from "public/profile.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <section
        id="introduction"
        className={"flex flex-col justify-around items-stretch text-center"}
      >
        <h2 className={"text-3xl mb-12 sm:text-4xl md:text-5xl"}>
          {"👋 Hello there!"}
        </h2>
        <div
          className={
            "grid place-items-center gap-8 sm:grid-cols-[2fr_1fr] sm:grid-rows-2 sm:max-w-2xl sm:gap-y-6 sm:gap-x-8 sm:mx-auto"
          }
        >
          <div className={"sm:justify-self-end sm:self-end"}>
            <p className={"text-lg md:text-2xl"}>{"My name is"}</p>
            <h3 className={"text-3xl md:text-4xl"}>{"Aleksei Kovalev"}</h3>
          </div>
          {/* Temporary replacement for picture */}
          <div
            className={
              "bg-slate-800 w-48 aspect-square rounded-full sm:row-span-2 md:w-64"
            }
          ></div>
          {/* <Image
          src={profile}
          alt={"Aleksei's profile"}
          width={150}
          className={"rounded-full mb-8 self-center"}
        /> */}
          <p className={"flex flex-col sm:justify-self-end sm:self-start "}>
            <span className={"font-bold text-xl sm:text-2xl"}>
              {" 4+ years of experience "}
            </span>
            <span className={"font-semibold sm:text-lg"}>
              {"in web development and design"}
            </span>
          </p>
        </div>
      </section>
      <section
        id="portfolio"
        className={"mt-20 pt-20 border-t-2 border-slate-300"}
      >
        <div>
          {Object.entries(portfolio).map(([category, items], i) => (
            <div key={i} className={"mb-16"}>
              <h1 className={"font-semibold text-2xl text-center mb-4"}>
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </h1>
              <ul className={"flex flex-wrap space-x-2 pr-2"}>
                {items.map((item, i) => (
                  <li
                    key={i}
                    className={
                      "border-slate-400 text-slate-600 first:ml-2 border-2 min-w-fit mb-2 px-4 flex-1 py-2 text-center"
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
