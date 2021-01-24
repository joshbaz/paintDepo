import React from 'react'
import doneImg from '../../assets/images/Done.svg';
import {
  SuccessWrapper,
  SuccessContainer,
  SuccessText,
  SuccessBtn,
  SuccessImg
} from "./successStyle";
const success = () => {
    return (
      <SuccessWrapper>
        <SuccessContainer>
        <SuccessImg src={doneImg}/>
          <SuccessText>THANK YOU</SuccessText>
          <SuccessText>SUCCESSFULLY SUBMITTED</SuccessText>

          <SuccessBtn to="/">
          BACK HOME
          </SuccessBtn>
        </SuccessContainer>
      </SuccessWrapper>
    );
}

export default success
