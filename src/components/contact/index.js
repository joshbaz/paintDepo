import React from "react";
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
  ContactDetailsContent,
  FormContent,
} from "./contactStyle";

import FormDetails from "./form";
import validate from "../../validation";
const ContactSection = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, submitError } = FormDetails(
    submitForm,
    validate
  );
  return (
    <ContactWrapper>
      <ContactContainer>
        <HeadWrapper>
          <HeadText>Contact Us</HeadText>
        </HeadWrapper>

        <ContactContent>
          <ContactDetailsContent>
            <CallWrapper>
              <CallTitle>CALL US</CallTitle>
              <CallText>For Customer Service & Product Advice</CallText>
              <CallDetail>+254 (0) 782960129</CallDetail>
            </CallWrapper>

            <EmailWrapper>
              <EmailTitle>WRITE TO US</EmailTitle>
              <EmailDetails>info@thepaintdepo.co.ke</EmailDetails>
            </EmailWrapper>
          </ContactDetailsContent>

          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <FormH1>GET IN TOUCH</FormH1>
              <FormP>SEND US A MESSAGE</FormP>
              {submitError.submiterror && (
                <FormError>{submitError.submiterror}</FormError>
              )}
              <FormContent>
                <FormLabel htmlFor="unames">NAME*</FormLabel>
                <FormInput
                  id="unames"
                  type="text"
                  name="unames"
                  value={values.unames}
                  onChange={handleChange}
                />
              </FormContent>
              {errors.unames && <FormError>{errors.unames}</FormError>}

              <FormContent>
                <FormLabel htmlFor="email">EMAIL ADDRESS*</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormContent>
              {errors.email && <FormError>{errors.email}</FormError>}

              <FormContent>
                <FormLabel htmlFor="phoneNumber">PHONE NUMBER*</FormLabel>
                <FormInput
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
              </FormContent>
              {errors.phoneNumber && (
                <FormError>{errors.phoneNumber}</FormError>
              )}

              <FormContent>
                <FormLabel htmlFor="location">LOCATION*</FormLabel>
                <FormInput
                  type="text"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                />
              </FormContent>
              {errors.location && <FormError>{errors.location}</FormError>}

              <FormContent>
                <FormLabel htmlFor="message">MESSAGE*</FormLabel>
                <FormTextArea
                  name="message"
                  placeholder="REASON FOR CONTACTING US"
                  value={values.message}
                  onChange={handleChange}
                />
              </FormContent>
              {errors.message && <FormError>{errors.message}</FormError>}

              <FormButton type="submit">SEND</FormButton>
            </Form>
          </FormWrapper>
        </ContactContent>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactSection;
