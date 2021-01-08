import React from 'react'
import One from '../../../assets/images/one.png';
import Two from "../../../assets/images/two.png";
import Three from "../../../assets/images/three.png";

import {
    ChooseWrapper,
    ChooseContainer,
    ChooseTitle,
    ChooseList,
    ChooseItem,
    ChooseImg,
    ChooseText
} from './chooseStyle'

const ChooseSection = () => {
    return (
      <ChooseWrapper>
        <ChooseContainer>
          <ChooseTitle>WHY CHOOSE US?</ChooseTitle>
          <ChooseList>
            <ChooseItem>
              <ChooseImg src={One}/>
              <ChooseText>HIGH QUALITY</ChooseText>
            </ChooseItem>
            <ChooseItem>
              <ChooseImg src={Two}/>
              <ChooseText>AFFORDABLE</ChooseText>
            </ChooseItem>
            <ChooseItem>
              <ChooseImg src={Three}/>
              <ChooseText>SAFE PAINT</ChooseText>
            </ChooseItem>
          </ChooseList>
        </ChooseContainer>
      </ChooseWrapper>
    );
}

export default ChooseSection
