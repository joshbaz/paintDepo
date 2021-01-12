import React, { useState } from 'react';
import ArrowUpImg from '../../assets/images/ArrowUp.png';
import ArrowDownImg from '../../assets/images/ArrowDown2.png';
import {
  FaqWrapper,
  FaqContainer,
  HeadWrapper,
  HeadText,
  FaqContent,
  FaqTitle,
  FaqText,
  FaqDetailsWrapper,
  FaqDetails,
  FaqQuestion,
  Question,
  Button,
  ArrowUp,
  ArrowDown,
  FaqAnswer,
} from "./FaqStyle";
const FaqSection = () => {

  const [clickState , setclickState] = useState(false);

  const openClick = () => {
    setclickState(!clickState)
  }
    return (
      <FaqWrapper>
        <FaqContainer>
          <HeadWrapper>
            <HeadText>Frequently Asked Questions</HeadText>
          </HeadWrapper>

          <FaqContent>
            <FaqTitle>GOT A QUESTION?</FaqTitle>
            <FaqText>Then we mignt just have the answer for you ...</FaqText>

            <FaqDetailsWrapper>
              <FaqDetails>
                <FaqQuestion>
                  <Question>What range of products do you have?</Question>
                  <Button onClick={openClick}>
                    {clickState ? (
                      <ArrowUp src={ArrowUpImg} />
                    ) : (
                      <ArrowDown src={ArrowDownImg} />
                    )}
                  </Button>
                </FaqQuestion>
                <FaqAnswer>
                  We have decorative (textured) paints for interior and exterior
                  as well as normal paints for interior and exterior, primers
                  and waterproofing.
                </FaqAnswer>
              </FaqDetails>
              <FaqDetails>
                <FaqQuestion>
                  <Question>What range of products do you have?</Question>
                  <Button onClick={openClick}>
                    {clickState ? (
                      <ArrowUp src={ArrowUpImg} />
                    ) : (
                      <ArrowDown src={ArrowDownImg} />
                    )}
                  </Button>
                </FaqQuestion>
                <FaqAnswer>
                  We have decorative (textured) paints for interior and exterior
                  as well as normal paints for interior and exterior, primers
                  and waterproofing.
                </FaqAnswer>
              </FaqDetails>
              <FaqDetails>
                <FaqQuestion>
                  <Question>What range of products do you have?</Question>
                  <Button onClick={openClick}>
                    {clickState ? (
                      <ArrowUp src={ArrowUpImg} />
                    ) : (
                      <ArrowDown src={ArrowDownImg} />
                    )}
                  </Button>
                </FaqQuestion>
                <FaqAnswer>
                  We have decorative (textured) paints for interior and exterior
                  as well as normal paints for interior and exterior, primers
                  and waterproofing.
                </FaqAnswer>
              </FaqDetails>
            </FaqDetailsWrapper>
          </FaqContent>
        </FaqContainer>
      </FaqWrapper>
    );
}

export default FaqSection;
