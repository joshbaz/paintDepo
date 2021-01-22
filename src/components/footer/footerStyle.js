import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  background: #272727;
  margin-top: 100px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fcfcfc;
  position:relative;
`;

export const SocialsWrapper = styled.div`
  margin-bottom: 15px;

  @media all and (min-width: 768px) {
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    
  }
`;

export const SocialTitle = styled.h1`
  font-size: 23px;
  line-height: 28px;
  font-weight: normal;
  margin-bottom: 15px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 1000px){
    position:relative;
    left: 75px;
  }
  @media all and (min-width: 768px) {
  
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;
export const SocialIconWrapper = styled.div`
  @media all and (min-width: 1000px) {
    position: relative;
    right: 75px;
  }
  @media all and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;
export const Socials = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 114px;
  height: 25.86px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    margin-bottom: 0;
    position: relative;
    font-size: 19px;
    align-items:center;
  }
`;
export const Icon = styled.div`
list-style: none;

`
export const Line = styled.hr`
width: 90vw;
margin: auto;
`;
export const ContentWrapper = styled.div`
  height: 422px;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr;
    grid-template-rows: 1fr;
    height: 322px;
    width: 90%;
    margin: auto;
    margin-left: 170px;
    display: ${({ detailCheck }) => (detailCheck ? "none" : "grid")};
  }

  @media all and (max-width: 767px) {
    display: ${({ detailCheck }) => (detailCheck ? "none" : "block")};
  }
`;

export const StoryWrapper = styled.div`
width: 134px;
height:92px;
margin: auto;

@media all and (min-width:768px){
  width: 100%;
  text-align:left;
}
`;

export const StoryTitle = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
  @media all and (min-width: 322px) {
    font-size: 19px;
  }
`;
export const StoryAbout = styled.h3`
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  @media all and (max-width: 321px) {
    font-size: 10px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
  }
  @media all and (min-width: 322px) {
    font-size: 13px;
  }
`;

export const StoryService = styled.h3`
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  @media all and (max-width: 321px) {
    font-size: 10px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
  }
  @media all and (min-width: 322px) {
    font-size: 13px;
  }
`;


export const ProductWrapper = styled.div`
  width: 189px;
  height: 92px;
  margin: auto;
  @media all and (min-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const ProductTitle = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
  @media all and (min-width: 322px) {
    font-size: 19px;
  }
`;

export const ProductColorLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const ProductColor = styled.h3`
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  @media all and (max-width: 321px) {
    font-size: 10px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
  }
  @media all and (min-width: 322px) {
    font-size: 13px;
  }
`;

export const ProductViewLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const ProductView = styled.h3`
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  @media all and (max-width: 321px) {
    font-size: 10px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
  }
  @media all and (min-width: 322px) {
    font-size: 13px;
  }
`;

export const ContactWrapper = styled.div`
  width: 189px;
  height: 92px;
  margin: auto;
  @media all and (min-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
export const ContactLink = styled(Link)`
text-decoration:none;
color:white;
`
export const Contact = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
  @media all and (min-width: 322px) {
    font-size: 19px;
  }
`;

export const FaqLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const Faq = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  margin-top: 19px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
  @media all and (min-width: 322px) {
    font-size: 19px;
  }
`;


export const LocationWrapper = styled.div`
  width: 90vw;
  height: 117px;
  margin-bottom: 40px;
  margin: auto;
  @media all and (min-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const LocationTitle = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
  @media all and (min-width: 322px) {
    font-size: 19px;
  }
`;
export const Location = styled.h3`
  font-size: 21px;
  line-height: 25px;
  font-weight: normal;

  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
    margin-bottom:20px;
  }
  @media all and (min-width: 322px) {
    font-size: 15px;
  }
`;

export const PhoneNumber = styled.h3`
  font-size: 21px;
  line-height: 25px;
  font-weight: normal;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
  }
  @media all and (min-width: 322px) {
    font-size: 15px;
  }
`;

export const EmailDetails = styled.h3`
  font-size: 21px;
  line-height: 25px;
  font-weight: normal;
  @media all and (max-width: 321px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 15px;
  }
  @media all and (min-width: 322px) {
    font-size: 15px;
  }
`;

export const MoreWrapperWeb = styled.div`
  display: none;
  @media all and (min-width: 768px) {
    display: block;
   
    position:relative;
   margin-top:20px;
  }
`;
export const MoreWrapper = styled.div`
  display: none;
  @media all and (max-width: 767px) {
    display: block;
    margin-top: 20px;
  }
  @media all and (max-width: 480px) {
    display: block;
  }
`;
export const MoreButton = styled.div`
pointer:cursor;
width: 50px;
height:50px;
margin:auto;

`;
export const MoreText = styled.div``;
export const MoreImg = styled.img``;
export const LinkWrapper = styled.div`
  width: 91%;
  height: 35px;
  margin: auto;
  background: #272727;
  @media all and (min-width:768px){
    width: 41%;
  }
`;
export const LinkItems = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom:5px;
  overflow: hidden;
`;
export const LinkItem1 = styled(Link)`
  text-align: left;
  width: 30vw;
  text-decoration: none;
  color: white;
  @media all and (min-width: 768px) {
    text-align: center;
  }
`;
export const LinkItem2 = styled(Link)`
  text-align: center;
  width: 40vw;
  border-left: 2px solid white;
  border-right: 2px solid white;
  padding-left: 12px;
  padding-right: 12px;
  text-decoration: none;
  color: white;
  @media all and (min-width: 768px) {
    text-align: center;
  }
`;
export const LinkItem3 = styled(Link)`
  text-decoration: none;
  text-align: right;
  width: 30vw;
  color: white;
  @media all and (min-width: 768px) {
    text-align: center;
  }
`;
export const LinkItem = styled(Link)``;
export const SiteItem = styled.h3`
  font-size: 15px;
  line-height: 20px;
  font-weight: normal;
  @media all and (max-width: 412px) {
    font-size: 10px;
  }
  @media all and (max-width: 373px) {
    font-size: 10px;
  }
  @media all and (min-width: 768px) {
    font-size: 13px;
  }
  @media all and (min-width: 413px) {
    font-size: 12px;
  }
`;
export const PolicyItem = styled.h3`
  font-size: 15px;
  line-height: 20px;
  font-weight: normal;

  @media all and (max-width: 412px) {
    font-size: 10px;
  }
  @media all and (max-width: 373px) {
    font-size: 9px;
  }
  @media all and (min-width: 768px) {
    font-size: 13px;
  }
  @media all and (min-width: 413px) {
    font-size: 12px;
  }
`;
export const FaqItem = styled.h3`
  font-size: 15px;
  line-height: 20px;
  font-weight: normal;
  @media all and (max-width: 412px) {
    font-size: 10px;
  }
  @media all and (max-width: 373px) {
    font-size: 10px;
  }
  @media all and (min-width: 768px) {
    font-size: 13px;
  }
  @media all and (min-width: 413px) {
    font-size: 12px;
  }
`;
