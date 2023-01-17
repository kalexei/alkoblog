import React, { PropsWithChildren } from "react";
import "../styles/globals.scss";

import { Montserrat } from "@next/font/google";
import Sidebar from "../components/Sidebar";
import { title, navLinks } from "../utils/constants";
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
              "fixed bg-inherit left-0 right-0 px-6 py-3 border-b-2 border-slate-300 flex justify-center"
            }
          >
            <div
              className={"w-full max-w-4xl flex items-center justify-between"}
            >
              <h1 className={"text-xl"}>
                <Link href={"/"}>{title}</Link>
              </h1>
              <nav className={"flex max-md:hidden"}>
                <ul className={"flex space-x-4"}>
                  {navLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={`${link.href}`}
                        className={
                          "underline-offset-4 underline decoration-transparent hover:decoration-slate-600 transition-colors"
                        }
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={"hidden max-md:block"}>
                <Sidebar />
              </div>
            </div>
          </header>
          <main
            className={"flex-1 pt-24 px-2 max-md:max-w-full max-w-4xl mx-auto"}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
