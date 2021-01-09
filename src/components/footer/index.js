import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
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
} from "./footerStyle";
const Footer = () => {
    return (
      <FooterWrapper>
        <FooterContainer>
          <SocialsWrapper>
            <SocialTitle>FOLLOW US</SocialTitle>

            <Socials>
              <Icon>
                <FaFacebook />
              </Icon>
              <Icon>
                <FaTwitter />
              </Icon>
              <Icon>
                <FaInstagram />
              </Icon>
            </Socials>
          </SocialsWrapper>
          <Line />
          <ContentWrapper>
            <StoryWrapper>
              <StoryTitle>OUR STORY</StoryTitle>
              <StoryAbout>ABOUT US</StoryAbout>
              <StoryService>SERVICES</StoryService>
            </StoryWrapper>

            <ProductWrapper>
              <ProductTitle>PRODUCT</ProductTitle>
              <ProductColor>VIEW BY COLOR</ProductColor>
              <ProductView>VIEW BY PRODUCT</ProductView>
            </ProductWrapper>

            <ContactWrapper>
              <Contact>CONTACT US</Contact>
              <Faq>FAQ</Faq>
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

          <Line />
          <LinkWrapper>
            <LinkItems>
              <LinkItem1> <SiteItem>SITEMAP</SiteItem></LinkItem1>
              <LinkItem2><PolicyItem>PRIVACY POLICY</PolicyItem></LinkItem2>
              <LinkItem3><FaqItem>FAQ</FaqItem></LinkItem3>
            </LinkItems>
          </LinkWrapper>
        </FooterContainer>
      </FooterWrapper>
    );
}

export default Footer
