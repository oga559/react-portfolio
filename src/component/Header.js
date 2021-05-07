import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderCss = styled.div`
    justify-content: space-between;
    padding: 0px 60px;
    text-align: center;
    display: flex;
    box-sizing: border-box;
`
const LinkCss = styled(Link)`
    margin: 0;
    padding: 12px;
    width: 80px;
    color: #3a3a3f;
    text-decoration: none;
    border-bottom: ${props => props.focused ? '2px solid #f44336' : 'none'};
    :hover{
        background-color: #eeeeee;
    }
`

export const Header = ({header,setHeader}) => {
    return(
        <>
        <HeaderCss>
                <LinkCss to="/" onClick={()=>setHeader('home')} focused={header === 'home'}>Home</LinkCss>
                <LinkCss to="/About" onClick={()=>setHeader('about')} focused={header === 'about'}>About</LinkCss>
                <LinkCss to="/Skill" onClick={()=>setHeader('skill')} focused={header === 'skill'}>Skill</LinkCss>
                <LinkCss to="/Contact" onClick={()=>setHeader('contact')} focused={header === 'contact'}>Contact</LinkCss>
        </HeaderCss>
        </>
    )
}