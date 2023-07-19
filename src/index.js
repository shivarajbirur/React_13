import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Heading from "./Heading.jsx";
import Mylist from "./Mylist.jsx";

const myElement = (
  <div>
    <Heading />
    <Mylist />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(myElement);
