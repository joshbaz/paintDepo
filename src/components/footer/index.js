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
} from "./footerStyle";
const Footer = () => {
    return (
      <FooterWrapper>
        <FooterContainer>
          <SocialsWrapper>
            <SocialTitle>FOLLOW US</SocialTitle>

            <Socials>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </Socials>
          </SocialsWrapper>
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
          <LinkWrapper>
          <LinkItems>
            <SiteItem>SITEMAP</SiteItem>
            <PolicyItem>PRIVACY POLICY</PolicyItem>
            <FaqItem>FAQ</FaqItem>
          </LinkItems>
          </LinkWrapper>
        </FooterContainer>
      </FooterWrapper>
    );
}

export default Footer
