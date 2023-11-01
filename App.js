// * HMR : Hot Modle Reload
// * File Watcher Algorithm
// * Bundling 
// * Minifying
// * cleaning our code
// * Dev and Production build
// * Super fast build algorithm
// * Image optimization
// * Caching while development
// * Compatible with older version of browser
// * HTTPS on local dev 
// *
// *
// *  All the above things are done by parcel


import React from "react"
import ReactDOM from "react-dom/client"
const heading = React.createElement(
    "h1",
    {
      title: "heading",
    },
    "Namaste React 1"
  );

  const heading2 = React.createElement(
    "h2",
    {
      title: "heading",
    },
    "Namaste React 2"
  );

  const container = React.createElement("div", {}, [heading, heading2]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);