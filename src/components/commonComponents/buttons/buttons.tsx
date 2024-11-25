"use client";
import React from "react";
import Edit from "@/assets/icons/general icons svg/edit.svg";
import Delete from "@/assets/icons/general icons svg/delete.svg";
import Image from "next/image";

interface content {
  text: string;
  onclick: () => void;
  type: "button" | "reset" | "submit" | undefined;
}

const Button1: React.FC<content> = ({ text, onclick, type }) => {
  return (
    <>
      {/* <div className="d-flex justify-content-end  inline"> */}
      <button
        type={type}
        onClick={onclick}
        className="bg-gradient-to-r from-twBlue to-twRedishPink px-3 py-1 m-2 mx-3 text-white rounded-lg"
        // className="w-25 p-2 m-1 bg-primary bg-gradient text-light rounded-pill "
      >
        {text}
      </button>
      {/* </div> */}
    </>
  );
};

export default Button1;

interface iconButtonContent {
  onclick: () => void;
  type: "button" | "reset" | "submit" | undefined;
}

export const IconEditButton: React.FC<iconButtonContent> = ({
  onclick,
  type,
}) => {
  return (
    <>
      <button type={type} onClick={onclick} className="border border-none">
        <Image src={Edit} alt="edit" width={25} height={25} />
      </button>
    </>
  );
};

export const IconDeleteButton: React.FC<iconButtonContent> = ({
  onclick,
  type,
}) => {
  return (
    <>
      <button type={type} onClick={onclick} className="border border-none">
        <Image src={Delete} alt="delete" width={25} height={25} />
      </button>
    </>
  );
};
