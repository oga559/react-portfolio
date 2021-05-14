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
    width: 100%;
`
const LinkCss = styled(Link)`
    margin: 0;
    padding: 12px 2%;
    width: 80px;
    color: #3a3a3f;
    text-decoration: none;
    transition: 0.5s;
    :hover{
        opacity: 0.7;
        background-color: #b0b0b2;
    }
    :active{
        background-color: #b0b0b2;
    }
`

export const Header = () => {
    return(
        <>
        <HeaderCss>
                <LinkCss to="/">Home</LinkCss>
                <LinkCss to="/About">About</LinkCss>
                <LinkCss to="/Skill">Skill</LinkCss>
                <LinkCss to="/Contact">Contact</LinkCss>
        </HeaderCss>
        </>
    )
}