import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
    margin: 0;
    padding: 0;
    
    .slick-prev,
    .slick-next {
        bottom: 0;
        height: 30px;
        margin: auto;
        top: 0;
        transform: initial;
        width: 30px;
        z-index: 50;
    
        &:before {
            font-size: 30px;
        }
    }
  
    .slick-prev {
        left: 0;
    }
    
    .slick-next {
        right: 16px;
    }
`;

export const SliderItem = styled.li`
    margin-right: 16px;
  
    img {
        height: 197px;
        margin: 16px;
        object-fit: cover;
        width: 298px;
    }
`;


const Slider = ({ children }) => (
    <Container>
        <SlickSlider {...{
            dots: false,
            infinite: false,
            speed: 300,
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: true,
        }}
        >
            {children}
        </SlickSlider>
    </Container>
);

export default Slider;