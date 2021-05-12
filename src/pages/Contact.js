import React from 'react';
import styled from 'styled-components';
import * as FadeIn from "../component/FadeIn";
import  emailjs from 'emailjs-com';
//アイコンと画像
import qiita from '../images/f149c85d239c13b76388822357755672-png.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";

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

const Border = styled.div`
    border: 4px double #ddd;
    margin: 10px auto 90px auto;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    width: 30%;
`


export const Contact = () =>{


    //メール送信email.js使用
    function sendEmail(e) {
        //環境変数
        const UserId = process.env.REACT_APP_USER_ID;
        const Service_Id = process.env.REACT_APP_SERVICE_ID;
        const Template_Id = process.env.REACT_APP_TEMPLATE_ID;
        e.preventDefault();

        //email.js専用の関数でemailで送信
        emailjs.sendForm(Service_Id,Template_Id, e.target,UserId)
        .then((result) => {
                console.log(result.text);
                }, (error) => {
                console.log(error.text);
            });
        }

    return(
        <ContactCss>
            <FadeIn.Up>
            <form className="contact-form" onSubmit={sendEmail} id="contact-form">
                <label>お名前</label>
                <input type="text" name="name" />
                <label>メールアドレス</label>
                <input type="email" name="email" />
                <label>メッセージ</label>
                <textarea name="message" />
                <button>送信</button>
            </form>
                <H2>Waiting for Contact !!!</H2>
            <H3>FOLLOW ME</H3>
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
            </FadeIn.Up>
            <FadeIn.Up>
                    <Border>
                        <H3>Thanks for watching my Portfolio !</H3>
                        <H3>I look forward to a good reply from you</H3>
                    </Border>
            </FadeIn.Up>
        </ContactCss>
    )
}