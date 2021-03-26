import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import ArrowDown from '../../assets/images/downSmall.svg';
import ArrowUp from '../../assets/images/Cancel.svg';
import {
  FooterWrapper,
  FooterContainer,
  SocialsWrapper,
  SocialTitle,
  Socials,
  ContentWrapper,
  StoryWrapper,
  StoryTitle,
  StoryAbout,
  StoryService,
  ProductWrapper,
  ProductTitle,
  ProductColor,
  ProductView,
  ContactWrapper,
  Contact,
  Faq,
  LocationWrapper,
  LocationTitle,
  Location,
  PhoneNumber,
  EmailDetails,
  LinkWrapper,
  LinkItems,
  SiteItem,
  PolicyItem,
  FaqItem,
  Line,
  Icon,
  LinkItem1,
  LinkItem2,
  LinkItem3,
  SocialIconWrapper,
  ContactLink,
  FaqLink,
  ProductColorLink,
  ProductViewLink,
  MoreWrapper,
  MoreButton,
  MoreText,
  MoreImg,
  MoreWrapperWeb,
  CopyRightWrapper,
  CopyRightItems,
  CopyRight,
  CreatedBy,
} from "./footerStyle";
const Footer = ({detailActive, clickMore, bg}) => {
    return (
      <FooterWrapper bg={bg}>
        <FooterContainer>
          <SocialsWrapper>
            <SocialTitle>FOLLOW US</SocialTitle>
            <SocialIconWrapper>
              <Socials>
                <Icon href="https://web.facebook.com/The-paint-Depo-109482480559373">
                  <FaFacebook />
                </Icon>
                <Icon href="https://twitter.com">
                  <FaTwitter />
                </Icon>
                <Icon href="https://www.instagram.com/thepaintdepo_ke/">
                  <FaInstagram />
                </Icon>
              </Socials>
            </SocialIconWrapper>
          </SocialsWrapper>
          <Line />
          <MoreWrapperWeb>
            <MoreButton onClick={clickMore}>
              <MoreText>{detailActive ? "More" : "Less"}</MoreText>
              {detailActive ? (
                <MoreImg src={ArrowDown} />
              ) : (
                <MoreImg src={ArrowUp} />
              )}
            </MoreButton>
          </MoreWrapperWeb>

          <ContentWrapper detailCheck={detailActive}>
            <StoryWrapper>
              <StoryTitle>OUR STORY</StoryTitle>
              <StoryAbout>ABOUT US</StoryAbout>
              <StoryService>SERVICES</StoryService>
            </StoryWrapper>

            <ProductWrapper>
              <ProductTitle>PRODUCT</ProductTitle>
              <ProductColorLink to="/colorfamily">
                <ProductColor>VIEW BY COLOR</ProductColor>
              </ProductColorLink>

              <ProductViewLink to="products">
                <ProductView>VIEW BY PRODUCT</ProductView>
              </ProductViewLink>
            </ProductWrapper>

            <ContactWrapper>
              <ContactLink to="contact">
                <Contact>CONTACT US</Contact>
              </ContactLink>

              <FaqLink to="/faq">
                <Faq>FAQ</Faq>
              </FaqLink>
            </ContactWrapper>

            <LocationWrapper>
              <LocationTitle>FIND US HERE</LocationTitle>
              <Location>
                Libra House, Mombasa Road, <br /> Nairobi,Kenya
              </Location>
              <PhoneNumber>+254 (0) 782960129</PhoneNumber>
              <EmailDetails>info@thepaintdepo.co.ke</EmailDetails>
            </LocationWrapper>
          </ContentWrapper>

          <MoreWrapper>
            <MoreButton onClick={clickMore}>
              <MoreText>{detailActive ? "More" : "Less"}</MoreText>
              {detailActive ? (
                <MoreImg src={ArrowDown} />
              ) : (
                <MoreImg src={ArrowUp} />
              )}
            </MoreButton>
          </MoreWrapper>
          <Line />
          <LinkWrapper>
            <LinkItems>
              <LinkItem1 href="https://paintdepo.alero.co.ke/sitemap.xml">
                <SiteItem>SITEMAP</SiteItem>
              </LinkItem1>
              <LinkItem2 to="/policy">
                <PolicyItem>PRIVACY POLICY</PolicyItem>
              </LinkItem2>
              <LinkItem3 to="/faq">
                <FaqItem>FAQ</FaqItem>
              </LinkItem3>
            </LinkItems>
          </LinkWrapper>

          <CopyRightWrapper>
            <CopyRightItems>
              <CopyRight>© 2019 The Paint Depo</CopyRight>
              <CreatedBy>Created by <a href="https://alero.co.ke" target="_blank">Alero </a></CreatedBy>
            </CopyRightItems>
          </CopyRightWrapper>
        </FooterContainer>
      </FooterWrapper>
    );
}

export default Footer
