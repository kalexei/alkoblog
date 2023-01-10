import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>layout in blog</div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
