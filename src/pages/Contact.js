import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";
import qiita from '../images/f149c85d239c13b76388822357755672-png.png';

const ContactCss = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    font-size: 25px;
`
const H2 = styled.h2`
    font-family: 'Caveat', cursive;
    font-size: 36px;
`

const Ul = styled.ul`
    text-align: center;
`

const Li = styled.li`
    display: inline-block;
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

export const Contact = () =>{
    return(
        <ContactCss>
            <H2>Waiting for Contact！</H2>
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
            <p>s2041131@g.tohoku-gakuin.ac.jp</p>
        </ContactCss>
    )
}