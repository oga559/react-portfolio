import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";
import * as FadeIn from "../component/FadeIn";
import qiita from '../images/f149c85d239c13b76388822357755672-png.png';

const ContactCss = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    font-size: 25px;
`
const H2 = styled.h2`
    font-family: 'Caveat', cursive;
    font-size: 50px;
    margin-bottom: 20px;
`

const H3 = styled.h3`
    font-family: 'Caveat', cursive;
`

const Ul = styled.ul`
    text-align: center;
    padding: 0;
`

const Li = styled.li`
    display: inline-block;
    :hover{
        transform: translateY(-5px);
        cursor: pointer;
    }
`

const Icon = styled(FontAwesomeIcon)`
    margin: 12px;
    width: 30px;
    color: black;
    :hover{
        color: #2b95ff;
    }
`

const Img = styled.img`
    width: 20px;
    margin: 12px;
`

const P = styled.p`
    font-family: 'Caveat';
    font-size: 35px;
`

export const Contact = () =>{
    return(
        <ContactCss>
            <FadeIn.Up>
                <H2>Waiting for Contact !!!</H2>
                <H3>FOLLOW ME</H3>
            </FadeIn.Up>
            <Ul>
                <Li>
                    <a href="https://twitter.com/ryousuk59423439"><Icon icon={faTwitter} /></a>
                </Li>
                <Li>
                    <a href="https://github.com/oga559"><Icon icon={faGithub} /></a>
                </Li>
                <Li>
                    <a href="https://qiita.com/oga559"><Img src={qiita}/></a>
                </Li>
            </Ul>
            <H2>e-mail</H2>
            <P>s2041131@g.tohoku-gakuin.ac.jp</P>
            <FadeIn.Up>
                <H3>Thanks for watching my Portfolio !</H3>
            </FadeIn.Up>
        </ContactCss>
    )
}