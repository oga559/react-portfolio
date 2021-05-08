import React from 'react';
import styled,{keyframes} from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(180px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
  40%,100% {
    opacity: 1;
  }
`

const AboutSlide = styled.div`
  animation: ${slideIn} 1s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
  height: 90vh;
`

const H2 = styled.h2`
  text-align: center;
  font-family: 'Noto Serif JP', serif;
`

const Dl = styled.dl`
  width: min-content;
  margin: 0 auto;
`

const Dt = styled.dt`
  font-family: 'Caveat', cursive;
  width: 300px;
  border: 4px double #ddd;
  margin: 10px;
  padding: 10px 10px 10px 10px;
  font-size: 18px;
  text-align: center;
`

const Dd = styled.dd`
  text-align: center;
  width: 230px;
  height: 50px;
  margin: 0 auto;
  font-family: 'Noto Serif JP', serif;
`

export const About = () =>{
    return(
      <AboutSlide>
      <H2>
        My About
      </H2>
        <Dl>
          <Dt>
            Name
          </Dt>
          <Dd>
            尾形 涼介
          </Dd>
        </Dl>
        <Dl>
          <Dt>
            Age
          </Dt>
          <Dd>
            20歳(大学2年生)
          </Dd>
        </Dl>
        <Dl>
          <Dt>
            Birthday
          </Dt>
          <Dd>
            2001/05/07
          </Dd>
        </Dl>
      </AboutSlide>
    )
}