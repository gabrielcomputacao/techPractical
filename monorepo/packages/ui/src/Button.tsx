import React, { FC } from "react";

type ButtonProps = {
  label: string;
};

export const Button: FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};
