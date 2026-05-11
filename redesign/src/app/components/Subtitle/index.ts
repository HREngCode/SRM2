import React from "react";
import classes from "./index.module.css";

interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle(props: SubtitleProps) {
  return React.createElement("h2", { className: classes.Container }, props.children);
}
