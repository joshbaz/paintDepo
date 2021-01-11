import React from 'react'
import {
  ContactWrapper,
  ContactContainer,
  HeadWrapper,
  HeadText,
  ContactContent,
  CallWrapper,
  CallTitle,
  CallText,
  CallDetail,
  EmailWrapper,
  EmailTitle,
  EmailDetails,
  FormWrapper,
  Form,
  FormH1,
  FormP,
  FormLabel,
  FormInput,
  FormButton,
  FormTextArea,
  FormError,
} from "./contactStyle";
const ContactSection = () => {
    return (
      <ContactWrapper>
        <ContactContainer>
          <HeadWrapper>
            <HeadText>Contact Us</HeadText>
          </HeadWrapper>

          <ContactContent>
            <CallWrapper>
              <CallTitle>CALL US</CallTitle>
              <CallText>For Customer Service & Product Advice</CallText>
              <CallDetail>+254 (0) 782960129</CallDetail>
            </CallWrapper>

            <EmailWrapper>
              <EmailTitle>WRITE TO US</EmailTitle>
              <EmailDetails>info@thepaintdepo.co.ke</EmailDetails>
            </EmailWrapper>

            <FormWrapper>
              <Form>
                <FormH1>GET IN TOUCH</FormH1>
                <FormP>SEND US A MESSAGE</FormP>
                <FormError>Error Message</FormError>
                <FormLabel htmlFor="name">NAME*</FormLabel>
                <FormInput type="text" name="name"/>
                <FormLabel htmlFor="email">EMAIL ADDRESS*</FormLabel>
                <FormInput type="email" name="email"/>
                <FormLabel htmlFor="phone">PHONE NUMBER*</FormLabel>
                <FormInput type="text" name="phone"/>
                <FormLabel htmlFor="location">LOCATION*</FormLabel>
                <FormInput type="text" name="location"/>
                <FormLabel htmlFor="message">MESSAGE*</FormLabel>
                <FormTextArea  name="message"/>
                <FormButton type="submit">SEND</FormButton>
               
              </Form>
            </FormWrapper>
          </ContactContent>
        </ContactContainer>
      </ContactWrapper>
    );
}

export default ContactSection
