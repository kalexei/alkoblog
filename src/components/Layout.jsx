import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, description, keywords, refreshURL }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {description ? <meta name="description" content={description} /> : null}
        {keywords ? (
          <meta name="keywords" content={keywords.join(",")} />
        ) : null}
        {description ? <meta name="description" content={description} /> : null}
        {refreshURL ? (
          <meta httpEquiv="refresh" content={`0; url=${refreshURL}`} />
        ) : null}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
