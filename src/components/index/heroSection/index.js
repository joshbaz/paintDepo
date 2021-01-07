import React from 'react';
import first from '../../../assets/images/pearl.png';
import second from '../../../assets/images/pearl-sample-room.png';
import {
    HeroWrapper, 
    HeroContainer, 
    HeroBg,
    HeroContent,
    PictureBg,
    HeroH1,
    HeroP,
    HeroArrow,

} from './heroStyles';

const heroSection = () => {
    const data = [
        {
            id: 1,
            image: first,
            Heading: 'PEARL',
            text: 'Gives You An Arabic Feel',

        },
        {
            id: 2,
            image: second,
            Heading: 'RELAX AT HOME',
            text: '',

        }
    ]

    const playSlide = () => {
        
    }

    return (
        <HeroWrapper id="home">
        <HeroContainer>
            <HeroBg>
            <PictureBg />
            </HeroBg>
            <HeroContent>
            <HeroH1> PEARL </HeroH1>
            <HeroP>Gives You An Arabic Feel</HeroP>
            </HeroContent>

            <HeroArrow>
             
            </HeroArrow>
        </HeroContainer>
            
        </HeroWrapper>
    )
}

export default heroSection
