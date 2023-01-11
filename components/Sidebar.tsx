"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline, IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Sidebar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <>
      <div>
        <RxHamburgerMenu
          className={"text-3xl"}
          onClick={() => toggleSidebar()}
        />
      </div>
      <div
        className={`flex fixed flex-col h-full z-20 border-l-2 bg-inherit px-4 py-2 transition-transform top-0 bottom-0 right-0 ${
          isOpen ? "flex -translate-x-18" : "translate-x-52"
        }`}
      >
        <IoCloseOutline
          className={"text-5xl self-end"}
          onClick={() => toggleSidebar()}
        />
        <nav className={"h-full mt-12 mr-10"}>
          <ul
            className={"h-full flex flex-col justify-start space-y-6 text-lg"}
          >
            <li>
              <Link
                href={"/"}
                className={"flex items-center"}
                onClick={() => toggleSidebar()}
              >
                <AiOutlineHome className={"align-middle mr-2"} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={"flex items-center"}
                onClick={() => toggleSidebar()}
              >
                <AiOutlineInfoCircle className={"align-middle mr-2"} />
                <span>About me</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className={"flex items-center"}
                onClick={() => toggleSidebar()}
              >
                <CgWebsite className={"align-middle mr-2"} />
                <span>My projects</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className={"flex items-center"}
                onClick={() => toggleSidebar()}
              >
                <MdOutlineLibraryBooks className={"align-middle mr-2"} />
                <span>My blogs</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/hireme"}
                className={"flex items-center"}
                onClick={() => toggleSidebar()}
              >
                <IoPersonAddOutline className={"align-middle mr-2"} />
                <span>Hire me</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen ? (
        <div
          className={
            "absolute z-0 bottom-0 top-0 left-0 right-0 bg-opacity-25 backdrop-blur-sm"
          }
          onClick={() => toggleSidebar()}
        ></div>
      ) : null}
    </>
  );
};

export default Sidebar;
