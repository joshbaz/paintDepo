import React from "react";
import Pin from "../Pin";
import {
  Wrappers,
  Containers,
  Wrap,
  HeadWrap,
  HeadText,
} from "./gallerystyles";
import "./gallery.css";
const GalleryS = ({ Imgdata, pins }) => {
  return (
    <Wrap>
      <HeadWrap>
        <HeadText>Gallery</HeadText>
      </HeadWrap>
      <Wrappers>
        <Containers className="galleryboard">
          {pins.map((data, index) => {
            return <Pin key={index} img={data.link} />;
          })}
        </Containers>
      </Wrappers>
    </Wrap>
  );
};

export default GalleryS;
