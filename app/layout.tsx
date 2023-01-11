import React, { PropsWithChildren } from "react";
import "../styles/globals.scss";

import { Montserrat } from "@next/font/google";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { title } from "../utils/constants";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <div id="root">
          <header
            className={
              "px-6 py-3 border-b-2 border-gray-300 flex justify-center"
            }
          >
            <div
              className={"w-full max-w-4xl flex items-center justify-between"}
            >
              <h1 className={"text-xl"}>{title}</h1>
              <nav className={"flex max-md:hidden"}>
                <ul className={"flex space-x-4"}>
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/about"}>About me</Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>My projects</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>My blogs</Link>
                  </li>
                  <li>
                    <Link href={"/hireme"}>Hire me</Link>
                  </li>
                </ul>
              </nav>
              <div className={"hidden max-md:block"}>
                <Sidebar />
              </div>
            </div>
          </header>
          <main className={"flex-1 p-4"}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
