"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline, IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineLibraryBooks } from "react-icons/md";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <>
      <div className={"toggleButton"}>
        <RxHamburgerMenu
          className={"text-3xl"}
          onClick={() => toggleSidebar()}
        />
      </div>
      <div
        className={`flex fixed flex-col h-full bg-gray-700 bg-opacity-95 px-4 py-2 transition-transform top-0 bottom-0 right-0 ${
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
              <Link href={"/"} className={"flex items-center"}>
                <AiOutlineHome className={"align-middle mr-2"} />{" "}
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={"flex items-center"}>
                <AiOutlineInfoCircle className={"align-middle mr-2"} />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className={"flex items-center"}>
                <CgWebsite className={"align-middle mr-2"} />
                <span>My projects</span>
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className={"flex items-center"}>
                <MdOutlineLibraryBooks className={"align-middle mr-2"} />
                <span>My blogs</span>
              </Link>
            </li>
            <li>
              <Link href={"/hire"} className={"flex items-center"}>
                <IoPersonAddOutline className={"align-middle mr-2"} />
                <span>Hire me</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
