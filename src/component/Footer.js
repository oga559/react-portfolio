import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterCss = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    font-size: 25px;
    background-color: #eeeeee;
`

const Icon = styled(FontAwesomeIcon)`
    margin: 12px;
    color: black;
    :hover{
        color: #2b95ff;
    }
`

export const Footer = () => {
    return(
        <FooterCss>
            <a href="https://twitter.com/ryousuk59423439"><Icon icon={faTwitter} /></a>
            <a href="https://github.com/oga559"><Icon icon={faGithub} /></a>
        </FooterCss>
    )
}