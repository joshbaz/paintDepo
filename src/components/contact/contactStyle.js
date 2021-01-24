import styled from 'styled-components';

export const ContactWrapper = styled.section`
width: 100vw;
height: 100%;
`;

export const ContactContainer = styled.div`
width: 100vw;
height: 100%;
`;

export const HeadWrapper = styled.div`
  height: 252px;
  background: rgba(165, 26, 93, 0.3);
  width: 100%;

  @media all and (min-width: 768px){
    height: 400px;
  }
  
`;

export const HeadText = styled.h1`
font-weight: 300;
font-size: 40px;
line-height: 47px;
text-align:center;
position: relative;
top: 152px;

@media all and (min-width:768px){
  top: 110px;
  text-align:left;
  left: 4vw;
}
`;

export const ContactContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
  @media all and (min-width: 1000px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "col1 col2";
    width: 90%;
    margin: auto;
    position: relative;
    min-height: 850px;
  }
  @media all and (min-width: 768px) {
    position: relative;
    top: -180px;
    width: 90%;
    margin: auto;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.12);
  }
`;
export const ContactDetailsContent = styled.div`
@media all and (min-width:1000px){
  grid-area:col2;
}

@media all and (min-width: 1000px){
  margin-top: 32px;
}
@media all and (min-width: 768px){
  text-align:left;
  width:90%;
  margin-left:auto;
 padding-top: 40px;
}
`;
export const CallWrapper = styled.div`
  text-align: center;
  margin-top: 25px;
  @media all and (min-width: 768px) {
    text-align: left;
    
  }
`;

export const CallTitle = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;

  @media all and (min-width: 1000px){
    font-size: 16px;
  }
  @media all and (min-width: 768px){
    font-size: 19px;
  }
  
`;

export const CallText = styled.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 25px;
  width: 50%;
  margin: auto;
  margin-top: 11px;
  color: #5b5b5b;

  @media all and (min-width: 1000px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    text-align: left;
    margin: 0;
    font-size: 19px;
  }
`;

export const CallDetail = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #5b5b5b;
  margin-top: 11px;

  @media all and (min-width: 768px){
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    text-align: left;
    font-size: 19px;
  }
`;

export const EmailWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  @media all and (min-width: 768px) {
    text-align: left;
    
  }
`;

export const EmailTitle = styled.h3`
font-weight: 500;
font-size: 26px;
line-height: 31px;

@media all and (min-width: 1000px){
  font-size: 16px;
}
@media all and (min-width: 768px){
  font-size: 19px;
}
`;

export const EmailDetails = styled.p`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  color: #5b5b5b;
  margin-top: 10px;

  @media all and (min-width: 1000px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    font-size: 19px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;

  @media all and (min-width: 1000px) {
    grid-area: col1;
  }
`;

export const Form = styled.form`
display: flex;
flex-direction:column;
width: 80%;
margin: auto;
`;

export const FormH1 = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 29px;

  @media all and (min-width: 1000px){
    position: relative !important;
    top:0 !important;
  }
  @media all and (min-width: 768px) {
    text-align: left;
    position: absolute;
    top: 9px;
  }
`;

export const FormP = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 21px;

  @media all and (min-width: 1000px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    text-align: left;
    font-size: 19px;
  }
`;
export const FormError = styled.p`
color:red;
`;

export const FormContent = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;

  @media all and (min-width: 768px) {
    height: 70px;
    width: 100%;
    display: grid;
    grid-template-rows:1fr;
    grid-template-columns: 0.3fr 1fr;
    position:relative;
  }
`;
export const FormLabel = styled.label`
font-weight: 400;
font-size: 15px;
line-height: 19px;
margin-bottom:11px;


`;

export const FormInput = styled.input`
  background: #fcfcfc;
  border-radius: 5.66667px;
  height: 51px;
  border: 2.26667px solid #838386;
  outline: none;
  
  width:100%;
`;

export const FormTextArea = styled.textarea`
  height: 148px;
  border: 2.26667px solid #838386;
  border-radius: 5.66667px;
  outline: none;
  width:100%;
  text-align:justify;
`;
export const FormButton = styled.button`
  width: 202px;
  margin: auto;
  height: 64px;
  color: rgba(165, 26, 93, 0.6);
  font-size: 25px;
  font-weight: 500;
  line-height: 29px;
  margin-top: 10vw;
  border: 2px solid #A51A5D;
  border-radius: 5px;
  
  @media all and (min-width: 1000px) {
    margin-top: 140px !important;
    position: relative;
    right: -50vw;
  }
  @media all and (min-width: 768px) {
    margin-top: 16vw;
  }
`;