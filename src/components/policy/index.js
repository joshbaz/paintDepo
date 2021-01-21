import React from 'react'
import {
  PolicyWrapper,
  PolicyContainer,
  PolicyTitle,
  DateUpdated,
  PolicyIntro,
  PolicyText,
  PolicyTextPointer,
  PolicyDetailWrapper,
  PolicyDetail,
  PolicyDetailTitle,
  PolicyParagraph,
  PolicyHeadSection
} from "./policyStyle";
const PolicySection = () => {
    return (
      <PolicyWrapper>
        <PolicyContainer>
        <PolicyHeadSection>
         <PolicyTitle>Privacy Policy</PolicyTitle>
          <DateUpdated>Last Updated 10-Feb-2020</DateUpdated>
        </PolicyHeadSection>
         
          <PolicyIntro>
            <PolicyText>
              Protection of your personal data is important to us. In this
              Privacy Statement we (“The Paint Depo” or “we” or “us”) explain
              how we process your personal data online and offline:
            </PolicyText>
            <PolicyTextPointer>
              - through our websites (“Websites”)
            </PolicyTextPointer>
            <PolicyTextPointer>
              - through services we provide to you (“Services”).
            </PolicyTextPointer>
          </PolicyIntro>

          <PolicyDetailWrapper>
            <PolicyDetail>
              <PolicyDetailTitle>
                1. Cookies and similar tracking technology
              </PolicyDetailTitle>
              <PolicyParagraph>
                On our Websites and Social Media channels, we may use cookies
                and other technology for our internal analytics purposes and to
                improve the quality and relevance of our products and our
                Services and to make our content and advertising more relevant
                to you.
              </PolicyParagraph>
              <PolicyParagraph>
                We only use tracking cookies (cookies to provide you with
                relevant advertising, or technology that tracks your behavior),
                with your consent. For further information about the type of
                cookies we use, the reason why we use them, and how you can
                control your cookies.
              </PolicyParagraph>
            </PolicyDetail>

            <PolicyDetail>
              <PolicyDetailTitle>
                2. With whom do we share your personal data?
              </PolicyDetailTitle>
              <PolicyParagraph>
                We may share your personal data with:
              </PolicyParagraph>
              <PolicyParagraph>
                Our group companies, our third-party partners and suppliers,
                professional advisers (such as banks, insurance companies,
                auditors, lawyers, accountants or other professional advisors),
                and other parties (such as ICT, service providers, consulting or
                shipping providers), that process personal data on our behalf
                for purposes that are described in this Privacy Statement, or
                for the purposes notified to you when we collect your personal
                data. To ensure that your personal data is treated with a high
                level of protection, The Paint Depo has implemented technical,
                organizational and contractual measures (such as data processing
                agreements) with third party suppliers to ensure that your
                personal data is exclusively processed for the purposes
                mentioned above and to ensure that your personal data is well
                secured.
              </PolicyParagraph>
            </PolicyDetail>

            <PolicyDetail>
              <PolicyDetailTitle>
                3. Where do we store your personal data?
              </PolicyDetailTitle>
              <PolicyParagraph>
                Due to our global way of operating, data you provide to us may
                be transferred to or accessed by our affiliates and trusted
                third parties in Kenya. As a result, your data may be processed
                in the country where you live, if this is necessary for the
                fulfillment of the purposes described in this Statement. Our
                main servers are in the United States Area, but our group
                companies and third-party suppliers operate around the world.
                This means that when we process your personal data, we may
                process it in any of these countries, subject to the following
                paragraph.
              </PolicyParagraph>
              <PolicyParagraph></PolicyParagraph>
            </PolicyDetail>

            <PolicyDetail>
              <PolicyDetailTitle>4. How do we secure your personal data?</PolicyDetailTitle>
              <PolicyParagraph>
                Your personal data are treated confidential, and we have taken
                technical and organizational security measures against loss or
                unlawful processing of this data. We use several security
                techniques including secure servers, firewalls and encryption,
                as well as physical safeguard of the locations where data is
                stored.
              </PolicyParagraph>
              <PolicyParagraph>
                You should be aware that the transmission of information via the
                internet is not completely secure. Although we will do what we
                reasonably can to protect your personal data, we cannot
                guarantee the security of any personal data that you disclose
                online. You accept the inherent security implications of using
                the internet and we will not be responsible for any breach of
                security unless we have been in breach of applicable laws, and
                then only to the limits set out in any relevant terms and
                conditions.
              </PolicyParagraph>
            </PolicyDetail>

            <PolicyDetail>
              <PolicyDetailTitle>6. How long do we retain personal data?</PolicyDetailTitle>
              <PolicyParagraph>
                We will retain your personal data for the period necessary to
                fulfil the purposes outlined in this Statement, unless a longer
                retention period is required or permitted by applicable law. For
                example, to provide you with a service you have requested or to
                comply with applicable legal, tax, or accounting requirements.
              </PolicyParagraph>
              
            </PolicyDetail>
          </PolicyDetailWrapper>
        </PolicyContainer>
      </PolicyWrapper>
    );
}

export default PolicySection
