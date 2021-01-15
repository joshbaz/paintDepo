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

import FormDetails from './form';
import validate from '../../validation'
const ContactSection = ({submitForm}) => {
  const {handleChange,values,handleSubmit,errors}= FormDetails(submitForm,validate);
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
              <Form onSubmit={handleSubmit}>
                <FormH1>GET IN TOUCH</FormH1>
                <FormP>SEND US A MESSAGE</FormP>
                <FormLabel htmlFor="unames">NAME*</FormLabel>
                <FormInput
                  id="unames"
                  type="text"
                  name="unames"
                  placeholder="Enter your username"
                  value={values.unames}
                  onChange={handleChange}
                />
                {errors.unames && <FormError>{errors.unames}</FormError>}
                <FormLabel htmlFor="email">EMAIL ADDRESS*</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <FormError>{errors.email}</FormError>}
                <FormLabel htmlFor="phoneNumber">PHONE NUMBER*</FormLabel>
                <FormInput
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <FormError>{errors.phoneNumber}</FormError>
                )}
                <FormLabel htmlFor="location">LOCATION*</FormLabel>
                <FormInput
                  type="text"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                />
                {errors.location && <FormError>{errors.location}</FormError>}
                <FormLabel htmlFor="message">MESSAGE*</FormLabel>
                <FormTextArea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
                {errors.message && <FormError>{errors.message}</FormError>}
                <FormButton type="submit">SEND</FormButton>
              </Form>
            </FormWrapper>
          </ContactContent>
        </ContactContainer>
      </ContactWrapper>
    );
}

export default ContactSection
