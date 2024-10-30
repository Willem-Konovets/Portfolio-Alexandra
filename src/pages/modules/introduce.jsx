import React from 'react';
import styled from 'styled-components';
import {Component} from "react";

import background from '../../images/background/Background.jpeg'
import circle from '../../images/icon/Circle.svg'
import instagram from '../../images/icon/Instagram.svg'
import github from '../../images/icon/GitHub.svg'
import facebook from '../../images/icon/Facebook.svg'


const IntroducePage = styled.section`
    background: url(${background}) center center no-repeat ;
    min-height: 800px;
`, Container = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 206px;
`, HamburgerWrapper = styled.div`
    width: 36px;
    height: 21px;
    margin-left: 95%;
    padding-top: 20px;
    display: flex;
    align-items: center;
`, Hamburger = styled.div`
    width: 36px;
    height: 3px;
    background: rgb(21, 24, 18);
    position: relative;
    &:after{
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        top: -8px;
        left: 6px;
        background: rgb(21, 24, 18);
    }
    &:before{
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        top: 8px;
        left: 6px;
        background: rgb(21, 24, 18);
    }
`, WrapperSocial = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    transform: rotate(-90.00deg);
    top: 360px;
    left: -110px;
    position: absolute;
`, SocialText = styled.h2`
    color: rgb(0, 0, 0);
    font-size: 18px;
`, SocialLine = styled.div`
    width: 75px;
    height: 3px;
    background-color: rgb(0, 0, 0);
`, SocialIcon = styled.div`
    display: flex;
    gap: 15px;
    img{
        transform: rotate(90.00deg);

    }
`, Name = styled.h2`
    font-size: 16px;
    position: relative;
    z-index: 1;
    &:before{
        content: '';
        background: url(${circle}) center center no-repeat;
        width: 36px;
        height: 36px;
        display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
        position: absolute; /* Установите позицию, если это необходимо */
        left: -11px;
        top: -9px;
        z-index: -1;
    }
`, Header = styled.h1`
    font-size: 48px;
    margin-top: 9px;
    max-width: 532px;;
    margin-bottom: 15px;
`, Button = styled.button`
    width: 135px;
    height: 45px;
    font-size: 14px;
`, LinkMe = styled.a`
    margin-left: 15px;
    font-size: 14px;
`

export default class Introduce extends Component {
    render() {
        return(
            <IntroducePage>
                <HamburgerWrapper>
                    <Hamburger></Hamburger>
                </HamburgerWrapper>
                <WrapperSocial>
                    <SocialText>Социальные сети</SocialText>
                    <SocialLine></SocialLine>
                    <SocialIcon>
                        <a href="">
                            <img src={github} alt=""/>
                        </a>
                        <a href="">
                        <img src={instagram} alt=""/>
                        </a>
                        <a href="">
                        <img src={facebook} alt=""/>
                        </a>
                    </SocialIcon>
                </WrapperSocial>
                <Container>
                    <Name>
                        Меня зовут Александра Смит
                    </Name>
                    <Header>
                        Я web-разработчик
                        из города Киев
                    </Header>
                        <a href="#"><Button>
                            Портфолио
                        </Button></a>
                    <LinkMe href=""> Про меня</LinkMe>
                </Container>

            </IntroducePage>
        )
    }

}