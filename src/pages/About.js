import React from 'react';
import styled from 'styled-components';
import * as FadeIn from "../component/FadeIn";

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
  width: 80%;
  height: 50px;
  margin: 0 auto;
  font-family: 'Noto Serif JP', serif;
`
const QuestionDd = styled.dd`
  margin: 0 auto;
  overflow-wrap: break-word;
  font-family: 'Noto Serif JP', serif;
`

const Container = styled.div`
  margin-bottom: 30px;
`

export const About = () =>{
    return(
      <Container>
        <FadeIn.Left>
        <H2>
          My Profile
        </H2>
          <Dl>
            <Dt>
              Name
            </Dt>
            <Dd>
              尾形 涼介
            </Dd>
          </Dl>
        </FadeIn.Left>
        <FadeIn.Right>
          <Dl>
            <Dt>
              Age
            </Dt>
            <Dd>
              20歳(大学2年生)
            </Dd>
          </Dl>
        </FadeIn.Right>
        <FadeIn.Left>
          <Dl>
            <Dt>
              Birthday
            </Dt>
            <Dd>
              2001/05/07
            </Dd>
          </Dl>
        </FadeIn.Left>
        <FadeIn.Right>
        <Dl>
            <Dt>
              University
            </Dt>
            <Dd>
              東北学院大学 機械知能工学科
            </Dd>
          </Dl>
        </FadeIn.Right>
        <FadeIn.Left>
          <Dl>
            <Dt>
              Q, なぜプログラミングを始めたのか
            </Dt>
            <QuestionDd>
              <p>大学１年で難病を患ってしまい肝臓の移植手術しました。その経験からITで医療のサービスを作りたいと思い、プログラミングを 始めました。
              </p>
            </QuestionDd>
          </Dl>
        </FadeIn.Left>
        <FadeIn.Right>
          <Dl>
            <Dt>
              Q, 趣味は何か
            </Dt>
            <QuestionDd>
              <p>剣道です。中高と続けており、県一位になったり選抜大会に出たことがあります。</p>
            </QuestionDd>
          </Dl>
        </FadeIn.Right>
        <FadeIn.Left>
          <Dl>
            <Dt>
              Q, 今後やりたいこと
            </Dt>
            <QuestionDd>
              <p>インターンやアルバイトなどで実務経験を積んでレベルアップしたいと思っています。</p>
            </QuestionDd>
          </Dl>
        </FadeIn.Left>
      </Container>
    )
}