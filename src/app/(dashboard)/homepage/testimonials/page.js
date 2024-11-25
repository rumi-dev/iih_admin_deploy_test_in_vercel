"use client";
import React, { lazy, useEffect, useState } from "react";
import ParaHeading from "@/components/commonComponents/paraHeading1";
import BigHeading from "@/components/commonComponents/bigHeading";
import { Paragraph1 } from "@/components/commonComponents/texts/paragraph";
import { ImagePreview2 } from "@/components/commonComponents/imagePreview";

import { apiEndPoints, isApiEnabled } from "@/url";
import { mainPage } from "@/TestingStaticData/data1";
import Button1, {
  IconDeleteButton,
  IconEditButton,
} from "@/components/commonComponents/buttons/buttons";
import { useRouter } from "next/navigation";
import personImage from "@/assets/icons/general icons svg/person_3.svg";
import Image from "next/image";
import { Modal } from "antd";
import TestimonialsEditPage from "@/app/(dashboard)/homepage/testimonials/edit/page";
import { message } from "antd";
import apiClient from "@/services/apiClient";
import { Myloadings } from "@/components/commonComponents/loadings/loading";
import { useDispatch, useSelector } from 'react-redux'


// interface TestimonialsList {
//   [key: string]: string;
// }
// interface TestimonialsContentProps {
//   [key: string]: TestimonialsList;
// }

const Testimonials = () => {
  // const [TestimonialsList, setTestimonialsList] =
  //   useState<TestimonialsList | null>(null);
  // const [Loading, setLoading] = useState(false);
  // const [Error, setError] = useState(null);
  const reduxContent = useSelector((state => state.mainpage));
  const reduxDispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  // const fetchData = async () => {
  //   setLoading(true);
  //   console.log("fetch starting");

  //   if (!isApiEnabled) {
  //     setTestimonialsList(mainPage.testimonialspoints);
  //     setLoading(false);
  //     return;
  //   }
  //   try {
  //     const response = await apiClient.get(apiEndPoints.testimonials);
  //     setTestimonialsList(response.data.attributes.testimonialspoints);
  //     setLoading(false);

  //     // if (response.status == 200) {
  //     //   console.log("200 working");
  //     //   setTestimonialsList(response.data.attributes.testimonialspoints);
  //     //   setLoading(false);
  //     // }
  //   } catch (error) {
  //     OpenErrorMessage("error");
  //     setLoading(false);
  //   }
  // };
  const OpenSuccessMessage = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  const OpenErrorMessage = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <>
      <BigHeading heading="Testimonials" />
      <ParaHeading heading="List of Testimonials" />
      {/* {Loading && <Myloadings />} */}

      <TestimonialsContent TestimonialsList={reduxContent.testimonialspoints} />

      {/* {Error && <p>Error in Loading data</p>} */}
    </>
  );
};

export default Testimonials;

const TestimonialsContent = ({
  TestimonialsList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const AddNewTestimonials = () => {
    router.push("/homepage/testimonials/edit");
  };
  const EditTestimonials = () => {
    setIsModalOpen(true);
  };
  const DeleteTestimonials = () => { };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {TestimonialsList &&
          Object.entries(TestimonialsList).map(([key, value]) => (
            <div
              className="d-flex flex-column align-items-center m-2 p-2 border col-3"
              key={key}
            >
              <div className="d-flex justify-content-end w-100">
                <IconDeleteButton onclick={DeleteTestimonials} type="button" />
                <IconEditButton onclick={EditTestimonials} type="button" />
              </div>
              <Image
                src={personImage}
                width={50}
                height={50}
                alt="profile Image"
              />
              <ParaHeading heading={key} />

              <Paragraph1 para={value} />
            </div>
          ))}
      </div>
      <Button1 text="Add new" onclick={AddNewTestimonials} type="button" />

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button1 text="cancel" type="button" onclick={handleCancel} key={'button'} />,
        ]}
      >
        <div className="pt-4">
          <TestimonialsEditPage />
        </div>
      </Modal>
    </>
  );
};
