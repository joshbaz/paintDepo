import React from 'react'
import {
  SuccessWrapper,
  SuccessContainer,
  SuccessText,
  SuccessBtn,
} from "./successStyle";
const success = () => {
    return (
      <SuccessWrapper>
        <SuccessContainer>
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
