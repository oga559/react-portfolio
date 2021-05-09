import React from 'react';
import styled,{ keyframes } from 'styled-components';

const backGround = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-900px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const Area = styled.div`
    background: black;
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    height: 90vh;
    display: table;
`
const CirclesUl = styled.ul`
    top: 0;
    left: 0;
    min-height: 10%;
    overflow: hidden;
    clear: both;
`
const CirclesLi = styled.li`
    position: absolute;
    display: block;
    list-style: none;
    clear: both;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    bottom: 0px;
    animation: ${backGround} 10s linear infinite;
    :nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    :nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    :nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    :nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    :nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }
    :nth-child(6){
        left: 75%;
        width: 20px;
        height: 30px;
        animation-delay: 0s;
        animation-duration: 35s
    }

    :nth-child(7){
        left: 35%;
        width: 10px;
        height: 10px;
        animation-delay: 0s;
    }

    :nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 1s;
        animation-duration: 45s;
    }

    :nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-duration: 35s;
    }

    :nth-child(10){
        left: 10%;
        width: 150px;
        height: 150px;
        animation-duration: 11s;
    }
`

const HomeCss = styled.div`
    width: 100%;
`

const FadeIn = styled.h2`
    text-align: center;
    animation: ${fadeIn};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    margin: 0;
    line-height: 100%;
    width: 100%;
    font-size: 40px;
    vertical-align: middle;
    display: table-cell;
    color: white;
    font-family: 'Londrina Shadow', cursive;
    font-size: 50px;
`

export const Home = () =>{
    return(
        <HomeCss>
                <Area>
                    <FadeIn>Ogata Ryousuke's Portfolio</FadeIn>
                    <CirclesUl>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                        <CirclesLi></CirclesLi>
                    </CirclesUl>
                </Area>
        </HomeCss>
    )
}