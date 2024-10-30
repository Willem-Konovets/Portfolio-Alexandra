import React from 'react';
import styled from 'styled-components';
import {Component} from "react";

import background from '../../images/background/Background.jpeg'
import circle from '../../images/icon/Circle.svg'
const IntroducePage = styled.section`
    background: url(${background}) center center no-repeat ;
    min-height: 800px;
`, Container = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 206px;
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
`, Button = styled.button`
    width: 135px;
    height: 45px;
    background: rgb(255, 165, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    border: none;
    margin-top: 15px;
    cursor: pointer;
    margin-right: 44px;
`

export default class Introduce extends Component {
    render() {
        return(
            <IntroducePage>
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
                    <a href=""> Про меня</a>
                </Container>

            </IntroducePage>
        )
    }

}