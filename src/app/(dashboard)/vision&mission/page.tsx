"use client";
import React, { lazy, useEffect, useState } from "react";
import ParaHeading from "@/components/commonComponents/paraHeading1";
import BigHeading from "@/components/commonComponents/bigHeading";
import { Paragraph1 } from "@/components/commonComponents/texts/paragraph";
import { ImagePreview2 } from "@/components/commonComponents/imagePreview";

import { isApiEnabled } from "@/url";
import { visionMission } from "@/TestingStaticData/data1";
import Button1 from "@/components/commonComponents/buttons/buttons";
import { useRouter } from "next/navigation";

// const visionmissionStaticData = lazy(()=> import '@/TestingStaticData/data1').then(module=>({
//     default:module.visionmission
// }))

const VisonMission: React.FC = () => {
  interface Section {
    text: string;
    image: string;
  }
  interface content {
    vision: Section;
    mission: Section;
  }

  const router = useRouter();

  //   const [VisionAndMission, setVisionAndMission] = useState<content | null>(
  //     null
  //   );
  function fetchData() {
    if (!isApiEnabled) {
      // console.log(visionmissionStaticData);

      return;
    }
  }

  const VisionMissionEdit = () => {
    router.push("/vision&mission/edit");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Vison and Mission</h1>
      <BigHeading heading="Vision & Mission" />
      <ParaHeading heading="Vision" />
      <ImagePreview2 ImageList={[visionMission.vision.image]} />
      <Paragraph1 para={visionMission.vision.text} />
      <ParaHeading heading="Mission" />
      <ImagePreview2 ImageList={[visionMission.mission.image]} />
      <Paragraph1 para={visionMission.mission.text} />
      <Button1 text="Edit" onclick={VisionMissionEdit} type="button" />
    </>
  );
};

export default VisonMission;
