import React from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right";
  marginBottom?: "0" | "10" | "20";
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  textAlign = "",
  marginBottom = "0",
}) => {
  return (
    <p
      className={[
        s["text"],
        s[textAlign],
        s[`marginBottom${marginBottom}`],
      ].join(" ")}
    >
      {children}
    </p>
  );
};
export default ErrorMessage;
