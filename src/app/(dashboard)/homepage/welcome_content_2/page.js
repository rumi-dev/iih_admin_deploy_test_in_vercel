"use client";
import React, { lazy, useEffect, useState } from "react";
import ParaHeading from "@/components/commonComponents/paraHeading1";
import BigHeading from "@/components/commonComponents/bigHeading";
import { Paragraph1 } from "@/components/commonComponents/texts/paragraph";
import { ImagePreview2 } from "@/components/commonComponents/imagePreview";
import { apiEndPoints, isApiEnabled } from "@/url";
import { mainPage } from "@/TestingStaticData/data1";
import Button1 from "@/components/commonComponents/buttons/buttons";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux'
import apiClient from "@/services/apiClient";



// const visionmissionStaticData = lazy(()=> import '@/TestingStaticData/data1').then(module=>({
//     default:module.visionmission
// }))

const WelcomeContent2 = () => {
  // const [Loading, setLoading] = useState(false)
  // const [Error, setError] = useState(false);
  const router = useRouter();
  const reduxContent = useSelector((state => state.mainpage));
  const reduxDispatch = useDispatch();



  // const fetchData = async () => {
  //   if (!isApiEnabled) {
  //     return;
  //   }
  //   console.log(';fetch working');

  //   try {
  //     const mainPageDataFromApi = await apiClient.get(apiEndPoints.baseUrl + apiEndPoints.mainpage);
  //     // console.log('mainPageBannertitle response: ' + mainPageBannertitle.status);
  //     console.log('mainPageBannertitle.data.data.attributes: ' + mainPageBannertitle.data.data.attributes.bannertitle);

  //     if (mainPageBannertitle.status == 200) {
  //       // const stateChangePayload = { bannertitle: mainPageBannertitle.data.data.attributes.bannertitle }
  //       // reduxDispatch(setMainPageContent(stateChangePayload))
  //       setLoading(false);
  //       // console.log('title.data.data.attributes.welcometitle: ' + title.data.data.attributes.welcometitle);
  //     }



  //     // reduxDispatch(setMainPageContent('redux content changed'))


  //     // if (response.status == 200) {
  //     //   console.log("200 working");
  //     //   setTestimonialsList(response.data.attributes.testimonialspoints);
  //     //   setLoading(false);
  //     // }
  //   } catch (error) {
  //     // OpenErrorMessage("error");
  //     setLoading(false);
  //     setError(true)
  //   }
  // }

  const VisionMissionEdit = () => {
    router.push("/homepage/welcome_content_2/edit");
  };

  useEffect(() => {
    // fetchData();'
  }, []);
  return (
    <>
      <BigHeading heading="Welcome Content 2" />

      <ParaHeading heading="Head Title" />
      <Paragraph1 para={reduxContent.welcometitle} />

      <ParaHeading heading="Title 1" />
      <Paragraph1 para={reduxContent.welcometitle1} />
      <ParaHeading heading="Description 1" />
      <Paragraph1 para={reduxContent.welcomedes1} />

      <ParaHeading heading="Title 2" />
      <Paragraph1 para={reduxContent.welcometitle1} />
      <ParaHeading heading="Description 2" />
      <Paragraph1 para={reduxContent.welcomedes1} />

      <ParaHeading heading="Left side Image" />
      <ImagePreview2 ImageList={[mainPage.welcomeContent2.Image]} />

      <Button1 text="Edit" onclick={VisionMissionEdit} type="button" />
    </>
  );
};

export default WelcomeContent2;
