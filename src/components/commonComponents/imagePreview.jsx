import React from "react";
import { Image as AntdImage } from "antd";
import Image from "next/image";

export const ImagePreview1 = ({ ImageList }) => (
  <AntdImage.PreviewGroup
    preview={{
      onChange: (current, prev) =>
        console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
      {ImageList.map((img, index) => (
        <div key={index}>
          <AntdImage width={300} src={img.src} />
        </div>
      ))}
    </div>
  </AntdImage.PreviewGroup>
);

export const ImagePreview2 = ({ ImageList }) => (
  <>
    <div className="d-flex flex-row justify-content-center">
      {ImageList.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            width={200}
            height={200}
            alt="Image List"
            className="m-2 object-fit-contain"
          />
        </div>
      ))}
    </div>
  </>
);
