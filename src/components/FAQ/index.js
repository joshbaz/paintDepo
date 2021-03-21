import React, { useEffect, useState } from 'react';
import btnBack from '../../assets/images/btnBack.svg';
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
  FaqAnswer,
  WrapButton,
  BackButton,
  BackImg,
  BackText
} from "./FaqStyle";
const FaqSection = ({faqData}) => {
  const [activeQuestion, setActiveQuestion] = useState([]);

  useEffect(()=>{
    
    let alldata = faqData.map((data, index)=>{
      
        if(index === 0){
            return {id:index, active:true}
        }else {
          return {id:index, active:false}
        }
    });
    setActiveQuestion(alldata);
  },[faqData])
  
  const openClick = (e) => {
    const value = parseInt(e.target.id);
    let updateData = activeQuestion.map((data, index)=>{
      if(data.id === value){
        return {id:value, active:true}
      }else {
        return {id:data.id, active:false}
      }
    })
    setActiveQuestion(updateData);
  }
    return (
      <FaqWrapper>
        <FaqContainer>
          <HeadWrapper>
            <HeadText>Frequently Asked Questions</HeadText>
          </HeadWrapper>

          <FaqContent>
            <FaqTitle>GOT A QUESTION?</FaqTitle>
            <FaqText>Then we might just have the answer for you ...</FaqText>

            <FaqDetailsWrapper>
            {faqData.map((data, index)=>{
              return (
                <FaqDetails key={index}>
                  <FaqQuestion>
                    <Question
                      onClick={openClick}
                      id={index}
                      checkId={index}
                      activeStatus={activeQuestion}
                    >
                      {data.question}
                    </Question>
                    <Button onClick={openClick}>
                      <WrapButton
                        
                        checkId={index}
                        activeStatus={activeQuestion}
                      ></WrapButton>
                    </Button>
                  </FaqQuestion>
                  <FaqAnswer checkId={index} activeStatus={activeQuestion}>
                    {data.answer}
                  </FaqAnswer>
                </FaqDetails>
              );
            })}
              
              
            </FaqDetailsWrapper>
            <BackButton to='/'>
            <BackImg src={btnBack}/>
            <BackText>GO BACK HOME</BackText>
            </BackButton>
          </FaqContent>
        </FaqContainer>
      </FaqWrapper>
    );
}

export default FaqSection;
