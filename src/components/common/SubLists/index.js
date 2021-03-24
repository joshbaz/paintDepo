import React, { useEffect, useState } from 'react'
import { Wrapper, Container, ListContainer, ListWrap } from "./substyles";
import {HeadWrap} from '../../common';
const SubLists = ({ Colordata, colorlist }) => {
  
  return (
    <Wrapper>
      <Container>
        <HeadWrap Colordata={Colordata} />

        <ListContainer>
          {colorlist.map((data, index) => {
            return (
              <ListWrap>
                <img src={data.link} alt="color"/>
              </ListWrap>
            );
          })}

          
        </ListContainer>
      </Container>
    </Wrapper>
  );
};

export  {SubLists};
