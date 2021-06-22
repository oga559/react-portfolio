import React, {useState} from 'react';
import styled from 'styled-components';
import * as FadeIn from "../component/FadeIn";
import  { send } from 'emailjs-com';
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

const InputDiv = styled.div`
	margin: 40px 3%;
`

const Input = styled.input`
    font-family: monospace;
    width: 70%;
    padding: 0.8em;
    outline: none;
    border: 1px solid #DDD;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 16px;
    :focus{
        box-shadow: 0 0 7px #3498db;
        border: 1px solid #3498db;
    }
`

const Textarea = styled.textarea`
    font-family: monospace;
    resize: none;
    height: 200px;
    width: 70%;
    padding: 0.8em;
    outline: none;
    border: 1px solid #DDD;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 16px;
    :focus{
        box-shadow: 0 0 7px #3498db;
        border: 1px solid #3498db;
    }
`

const Button = styled.button`
    margin-top: 5px;
    border-radius: 0;
    background: -moz-linear-gradient(top, #FFF 0%, #EEE);
    background: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#EEE));
    border: 1px solid #DDD;
    color: dimgray;
    padding: 10px 30px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    display: block;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
    font-weight: bold;
    padding: 13px 10px 10px;
    border-radius: 5px;
    border-bottom: 5px solid rgba(0,0,0,0.3);
    :hover{
        background: -moz-linear-gradient(top, #EFEFEF 0%, #EEE);
        background: -webkit-gradient(linear, left top, left bottom, from(#EFEFEF), to(#EEE));
    }
    :active{
        border-bottom-width: 2px;
        margin-top: 5px;
    }
`

export const Contact = () =>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    //メール送信email.js使用
    function sendEmail(e) {
        e.preventDefault();
        //環境変数
        const UserId = process.env.REACT_APP_USER_ID;
        const Service_Id = process.env.REACT_APP_SERVICE_ID;
        const Template_Id = process.env.REACT_APP_TEMPLATE_ID;

        //メールに送る値を設定
        const templateParams = {
            name : name,
            email : email,
            message : message,
        }

        //email.js専用の関数でemailで送信
        send(Service_Id,Template_Id,templateParams,UserId)
        .then((result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setMessage('');
                alert('メールを送信しました');
                }, (error) => {
                console.log(error.text);
                alert('メール送信に失敗しました');
            });
        }

    return(
        <ContactCss>
            <FadeIn.Up>
                <div>
                    <H2>Waiting for Contact !!!</H2>
                    <H3>Contact Form</H3>
                    <form className="contact-form" onSubmit={(e) => sendEmail(e)} id="contact-form">
                    <InputDiv>
                            <Input type="text" name="name" value={ name } onChange={(e) => setName(e.target.value)} placeholder="名前(必須)" required />
                    </InputDiv>
                    <InputDiv>
                            <Input type="email" name="email" value={ email } onChange={(e) => setEmail(e.target.value)  } placeholder="メールアドレス(必須)" required/>
                    </InputDiv>
                    <InputDiv>
                            <Textarea name="message" value={ message } onChange={(e) => setMessage(e.target.value)} placeholder="メッセージ(必須)" required/>
                    </InputDiv>
                    <Button>送信</Button>
                    </form>
                </div>
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