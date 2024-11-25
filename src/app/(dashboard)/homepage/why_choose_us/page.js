"use client";
import React, { lazy, useEffect, useState } from "react";
import ParaHeading from "@/components/commonComponents/paraHeading1";
import BigHeading from "@/components/commonComponents/bigHeading";
import { Paragraph1 } from "@/components/commonComponents/texts/paragraph";
import { ImagePreview2 } from "@/components/commonComponents/imagePreview";

import { isApiEnabled } from "@/url";
import { mainPage } from "@/TestingStaticData/data1";
import Button1 from "@/components/commonComponents/buttons/buttons";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux'


const WhyChooseUs = () => {
  const router = useRouter();
  const reduxContent = useSelector((state => state.mainpage));
  const reduxDispatch = useDispatch();


  // function fetchData() {
  //   if (!isApiEnabled) {
  //     // console.log(visionmissionStaticData);

  //     return;
  //   }
  // }

  const WhyChooseUsEdit = () => {
    router.push("/homepage/why_choose_us/edit");
  };

  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <>
      <BigHeading heading="Why Choose Us" />

      <ParaHeading heading="Why Choose Us List" />
      {reduxContent.chooseuspoints.map((list, index) => (
        < div key={index}>
          <Paragraph1 para={index + 1 + ". " + list} />
        </div>
      ))}

      <Button1 text="Edit" onclick={WhyChooseUsEdit} type="button" />
    </>
  );
};

export default WhyChooseUs;
