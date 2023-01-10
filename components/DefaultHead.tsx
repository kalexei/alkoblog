import React from "react";

const DefaultHead: React.FC = () => {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Aleksei Kovalev" />
      <meta
        name="keywords"
        content="blog, computer science, programming, web developer, knowledge"
      />
      <meta
        name="description"
        content="Aleksei Kovalev's personal blog where he shares his knowledge with people"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>Alkoblog</title>
    </>
  );
};

export default DefaultHead;
