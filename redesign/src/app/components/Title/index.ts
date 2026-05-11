import React from "react";
import classes from "./index.module.css";

export default function Title(props: { children: React.ReactNode }) {
  return React.createElement("h1", { className: classes.Container }, props.children);
}