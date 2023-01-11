import Image from "next/image";
import React from "react";
// import profile from "public/profile.jpg";

const Home: React.FC = () => {
  return (
    <div className={"mt-4"}>
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
    </div>
  );
};

export default Home;
