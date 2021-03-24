import React from "react";
import {
  Wrapper,
  Container,
  ListContainer,
  ListWrap,
  ListText,
} from "./productstyles";
import { HeadWrap } from "../../common";
const ProductLists = ({ paintdata, paintlist, openModal }) => {

  return (
    <Wrapper>
      <Container>
        <HeadWrap Colordata={paintdata} />

        <ListContainer>
          {paintlist.map((data, index) => {
            return (
              <ListWrap key={index} id={data.id} onClick={openModal}>
                <img id={data.id} src={data.image} className={data.class} alt="color" />
                <ListText id={data.id}>{data.productName}</ListText>
              </ListWrap>
            );
          })}
        </ListContainer>
      </Container>
    </Wrapper>
  );
};

export { ProductLists };
