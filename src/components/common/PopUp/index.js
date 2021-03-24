import React, {useRef, useEffect, useState} from 'react';
import {MdClose, } from 'react-icons/md';
import {useSpring, animated} from 'react-spring';
import {
  Wrapper,
  Container,
  ImageWrapper,
  DocTitle,
  DocDownload,
  ContentWrapper,
  ProductTitle,
  ProductText,
  ProductSize,
  ProductFeatures,
  ProductSurface,
  Icon,
  ButtonWrapper,
} from "./popupstyles";

const ProductPopup = ({showModal, setShowModal, product, paintlist}) => {


const [paintData, setPaintData] = useState({});
const [paintDataSheet, setPaintDataSheet] = useState([]);
const [paintFeatures, setPaintFeatures] = useState([]);
useEffect(() => {
  paintlist.map((data, index) => {
    if (data.id === product) {
     
          setPaintData(data)
          setPaintDataSheet(data.datasheet.list);
          setPaintFeatures(data.characteristic);
           return null;
          
    } else {
      return null;
    }
  });
}, [paintlist, product]);
const popRef = useRef();

const animation = useSpring({
  config: {
    duration: 350,
  },
  opacity: showModal ? 1 : 0,
  transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
});

const closePopup = e => {
    if (popRef.current === e.target) {
      setShowModal(false);
    }
}

    return (
      <>
        {showModal ? (
          <Wrapper ref={popRef} onClick={closePopup}>
            <animated.div style={animation}>
              <Container showModal={showModal}>
                <Icon onClick={() => setShowModal((prev) => !prev)}>
                  <MdClose />
                </Icon>
                <ImageWrapper >
                  <img
                    src={paintData.image}
                    className={paintData.class}
                    alt=""
                  />
                  {paintDataSheet.length > 0 && (
                    <>
                      <DocTitle>Document</DocTitle>
                      <ButtonWrapper>
                        {paintDataSheet.map((data, index) => {
                          return (
                            <DocDownload
                              key={index}
                              href={data.link}
                              target="_blank"
                            >
                              {data.title}
                            </DocDownload>
                          );
                        })}
                      </ButtonWrapper>
                    </>
                  )}
                </ImageWrapper>
                <ContentWrapper>
                  <ProductTitle>{paintData.productName}</ProductTitle>
                  <ProductText>{paintData.description}</ProductText>

                  <ProductSize>
                    <h5>PACKAGING :</h5>
                    <p>7.5 litres, 15 litres</p>
                  </ProductSize>

                  <ProductFeatures>
                    <h5>FEATURES :</h5>
                    {paintFeatures.map((data, index) => {
                      return <p key={index}>- {data.text}</p>;
                    })}
                  </ProductFeatures>
                  {paintData.surfacePreparation && (
                    <ProductSurface>
                      <h5>SURFACE PREPARATION:</h5>
                      <p>{paintData.surfacePreparation}</p>
                    </ProductSurface>
                  )}
                </ContentWrapper>
              </Container>
            </animated.div>
          </Wrapper>
        ) : null}
      </>
    );
}

export default ProductPopup
