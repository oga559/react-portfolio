import React from 'react';
import styled from 'styled-components';
import * as FadeIn from "../component/FadeIn";
import media from 'styled-media-query';
// image
import html from '../images/icons8-html-5-480.png';
import css from '../images/icons8-css3-480.png'
import js from '../images/icons8-javascript-logo-250.png';
import php from '../images/icons8-php-logo-480.png';
import laravel from '../images/laravel_icon_130892.png';
import react from '../images/react_original_wordmark_logo_icon_146375.png';
import mysql from '../images/mysql_original_wordmark_logo_icon_146417.png';
import redux from '../images/redux_original_logo_icon_146365.png';
import c from '../images/c_plain_logo_icon_146610.png';
import aws from '../images/aws_icon_146074.png';

const H2 = styled.h2`
    text-align: center;
    font-family: 'Noto Serif JP', serif;
`

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${media.lessThan("medium")`
    justify-content: center;
    `}
`

const Box = styled.div`
    box-shadow: 0 0 16px 0 rgb(0 0 0 / 4%);
    border-radius: 20px;
    width: 40%;
    height: 300px;
    margin: 10px 0;
    color: #707070;
    display: inline-table;
    ${media.lessThan("medium")`
    width: 80%;
    `}
`
const Img = styled.img`
    height: 80%;
    width: 100%;
`
const Title = styled.div`
    text-align: center;
    font-size: 24px;
`
const Explanation = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    padding: 12px;
    text-align: center;
`
export const Skill = () =>{
    return(
    <FadeIn.Up>
        <H2>My Skill</H2>
        <Container>
            <Box>
                <Img src={html}/>
                <Title>HTML</Title>
                <Explanation>一番始めに学習した言語です。問題無く書けます。</Explanation>
	        </Box>
	        <Box>
	        	<Img src={css}/>
                <Title>CSS</Title>
                <Explanation>HTML同様一番始めに学習した言語で問題無く書けます。</Explanation>
	        </Box>
	        <Box>
	        	<Img src={js}/>
                <Title>Javascript</Title>
                <Explanation>サイトを動的にしたいと思い勉強しました。Javascriptだけの処理は勿論、Laravelと併用してMysqlのデータを用いた処理を書けます。</Explanation>
	        </Box>
	        <Box>
	        	<Img src={php}/>
                <Title>php</Title>
                <Explanation>サーバーサイドに興味があったので勉強しました。CRUD処理やMysql、CSVファイルを用いたデータ管理ができ掲示板サイトが作れます。</Explanation>
	        </Box>
            <Box>
                <Img src={laravel}/>
                <Title>Laravel</Title>
                <Explanation>画像や文字のCRUD処理や、ログイン機能、設定時間でアラートが出るなどといったお薬手帳アプリを開発しました。</Explanation>
            </Box>
            <Box>
                <Img src={mysql}/>
                <Title>Mysql</Title>
                <Explanation>DBを学習するために勉強しました。</Explanation>
            </Box>
            <Box>
                <Img src={react}/>
                <Title>React</Title>
                <Explanation>オシャンティなUIに興味があったので勉強を始めました。このポートフォリオはReactで作りました。
                </Explanation>
            </Box>
            <Box>
                <Img src={redux}/>
                <Title>Redux</Title>
                <Explanation>大規模開発に利用されるとのことだったので勉強を始めました。</Explanation>
            </Box>
            <Box>
                <Img src={aws}/>
                <Title>AWS</Title>
                <Explanation>実際にネットに公開したかったので勉強しました。EC2にデプロイができます。</Explanation>
            </Box>
            <Box>
                <Img src={c}/>
                <Title>C</Title>
                <Explanation>大学で、条件分岐やデータ型などプログラミングの基礎的な部分を勉強しました。</Explanation>
            </Box>
        </Container>
    </FadeIn.Up>
    )
}