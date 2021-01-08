import React from 'react'
import {
    OfferWrapper,
    OfferContainer,
    OfferTitle,
    OfferText,
    OfferButtonWrapper,
    OfferButton
} from './offerstyle';
const OfferSection = () => {
    return (
      <OfferWrapper>
        <OfferContainer>
          <OfferTitle>
            WE OFFER RESIDENTIAL & COMMERCIAL PAINTING SERVICES
          </OfferTitle>
          <OfferText>
            Choose from a variety of paints and painting services to suit your
            vision for your residences as well as commercial premises. We
            provide solutions to your colorful tailor made dream and give life
            to your walls.
          </OfferText>
          <OfferButtonWrapper>
            <OfferButton>REQUEST QUOTE</OfferButton>
          </OfferButtonWrapper>
        </OfferContainer>
      </OfferWrapper>
    );
}

export default OfferSection
