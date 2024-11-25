import React from "react";

interface HeadingProps {
  heading: string;
}

const ParaHeading1: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <h2 className="bg-secondary bg-gradient p-3  text-light">{heading}</h2>
  );
};

export default ParaHeading1;
