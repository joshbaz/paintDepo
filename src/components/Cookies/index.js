import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  CookieText,
  CookieBtn,
  Content,
  BtnText
} from "./cookieStyles";
const CookieAccept = ({scroll, checkCookies, click}) => {
    return (
      <Container scrollBy={scroll} checkdisplay={checkCookies}>
        <Wrapper>
          <Content>
            <Title>The Paint Depo respects the privacy of your data</Title>
            <CookieText>
              The Paint Depo uses cookies to offer the basic functionality of
              the website, to generate user statistics using Google Analytics on
              an anonymous basis to make our website more user friendly and to
              tailor advertising on The Paint Depo websites and others. We
              process personal data in compliance with GDPR. Please see our
              Privacy Statement for more information.
            </CookieText>
            <CookieBtn onClick={click}><BtnText>I AGREE</BtnText></CookieBtn>
          </Content>
        </Wrapper>
      </Container>
    );
}

export default CookieAccept
