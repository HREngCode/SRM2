import React from "react";
import classes from "./index.module.css";

export default function Wrapper(props: { children?: React.ReactNode }) {
  return React.createElement("div", { className: classes.Container }, props.children);
}