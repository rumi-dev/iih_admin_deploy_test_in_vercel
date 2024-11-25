"use client"
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    redirect("/authentication/sign-in");
    // redirect("/dashboard");
  }, []); 
  return <></>;
};

export default Page;
