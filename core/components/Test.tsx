import React from "react";

export interface testProps {
  text: string;
}

export const Test = ({ text }: testProps) => <span>{text}</span>;
