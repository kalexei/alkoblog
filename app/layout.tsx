import React, { PropsWithChildren } from "react";
import "../styles/globals.scss";

import { Montserrat } from "@next/font/google";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { title } from "../utils/constants";

const montserrat = Montserrat({ subsets: ["latin"] });

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <div id="root">
          <header
            className={
              "px-6 py-3 border-b-2 border-gray-300 flex items-center justify-between"
            }
          >
            <h1 className={"text-xl"}>{title}</h1>
            <nav className={"flex max-md:hidden"}>navbar</nav>
            <Sidebar />
          </header>
          <main className={"flex-1 p-4"}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
