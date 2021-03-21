import React from "react";
import paintdepoSpinner from "../../assets/images/paintDepoLogo.svg";
import { LoaderWrapper, LoaderContainer } from "./loaderstyle";
const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <img className="logo-spin" src={paintdepoSpinner} alt="" />
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;
