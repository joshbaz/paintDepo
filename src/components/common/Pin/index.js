import React from "react";
import { Wrapper, Container } from "./pinstyles";
import placeholder from "../../../assets/placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Pin = ({ img }) => {
  return (
    <Wrapper>
      <Container>
        <LazyLoadImage
          effect="blur"
          src={img}
          alt=""
          placeholderSrc={placeholder}
        />
      </Container>
    </Wrapper>
  );
};

export default Pin;
