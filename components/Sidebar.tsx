"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "../utils/constants";

const Sidebar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpen(prev => !prev);
  }, [setOpen]);

  return (
    <>
      <div>
        <RxHamburgerMenu
          className={"text-3xl"}
          onClick={() => toggleSidebar()}
        />
      </div>
      <div
        className={`flex fixed flex-col h-full z-20 border-l-2 bg-slate-200 px-4 py-2 transition-transform top-0 bottom-0 right-0 ${
          isOpen ? "flex -translate-x-18" : "translate-x-52"
        }`}
      >
        <IoCloseOutline
          className={"text-5xl self-end"}
          onClick={() => toggleSidebar()}
        />
        <nav className={"h-full mt-12 mr-16"}>
          <ul
            className={"h-full flex flex-col justify-start text-lg space-y-6"}
          >
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  className={"flex items-center"}
                  onClick={() => toggleSidebar()}
                  href={`${link.href}`}
                >
                  <link.icon className={"align-middle mr-2"} />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen ? (
        <div
          className={
            "fixed z-0 bottom-0 top-0 left-0 right-0 bg-opacity-25 backdrop-blur-sm"
          }
          onClick={() => toggleSidebar()}
        ></div>
      ) : null}
    </>
  );
};

export default Sidebar;
