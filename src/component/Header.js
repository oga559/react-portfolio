import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderCss = styled.div`
    justify-content: space-between;
    padding: 0px 60px;
    text-align: center;
    display: flex;
    box-sizing: border-box;
    background-color: #eeeeee;
`
const LinkCss = styled(Link)`
    margin: 0;
    padding: 12px;
    width: 80px;
    color: #3a3a3f;
    text-decoration: none;
    :hover{
        opacity: 0.7;
    }
`

export const Header = () => {
    return(
        <>
        <HeaderCss>
                <LinkCss to="/" >Home</LinkCss>
                <LinkCss to="/About">About</LinkCss>
                <LinkCss to="/Skill">Skill</LinkCss>
                <LinkCss to="/Contact">Contact</LinkCss>
        </HeaderCss>
        </>
    )
}