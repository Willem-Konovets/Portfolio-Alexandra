import React from 'react';
import styled from 'styled-components';
import {Component} from "react";

import circle from '../../images/icon/Circle.svg'
import pc from '../../images/icon/PC.svg'
import pcUi from '../../images/icon/PCui.svg'
import mobile from '../../images/icon/Mobile.svg'
import photo from '../../images/img/PhotoAlexandra.jpeg'


const AboutMeSection = styled.div`
    min-height: 600px;
    margin-top: 120px;
    display: grid;
        grid-template-columns: repeat(2, 1fr);
`, Heading = styled.h2`
    font-size: 16px;
    position: relative;
    &:before{
            content: '';
            background: url(${circle}) center center no-repeat;
            width: 36px;
            height: 36px;
            display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
            position: absolute; /* Установите позицию, если это необходимо */
            left: -11px;
            top: -7px;
            z-index: -1;
    }
`, Title = styled.h2`
    font-size: 36px;
    margin-top: 20px;
`, Line = styled.div`
    width: 60px;
    margin-top: 1px;
    height: 0;
    border: 1px solid rgb(255, 165, 1);
`, Description = styled.h3`
    margin-top: 21px;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
`, SkillsGrid = styled.div`
    display: grid;
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
`, SkillWrapper = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: 36px 200px;
`, SkillsIcon = styled.img`
    position: relative;
    z-index: 1;
    &:before{
        content: '';
        width: 36px;
        background: rgb(255, 165, 1);
        border-radius: 100%;
        height: 36px;
        display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
        position: absolute; /* Установите позицию, если это необходимо */
        left: -11px;
        top: -9px;
        z-index: -1;
    }
`, SkillTitle = styled.h2`
    font-size: 14px;
    position: relative;
    &:before{
        content: '';
        background: url(${circle}) center center no-repeat;
        width: 36px;
        height: 36px;
        display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
        position: absolute; /* Установите позицию, если это необходимо */
        left: -51px;
        top: -16px;
        z-index: -1;
`, SkillDescr = styled.h3`
    font-size: 12px;
    margin-top: 6px;
`
export default class AboutMe extends Component {
    render() {
        return(
            <AboutMeSection>
                <img src={photo} alt=""/>
                <div>
                    <Heading>Про меня</Heading>
                    <Title>Меня зовут Александра</Title>
                    <Line></Line>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Description>
                    <SkillsGrid>
                        <SkillWrapper>
                            <SkillsIcon src={pc} alt=""/>
                            <div>
                                <SkillTitle>Web-разработка</SkillTitle>
                                <SkillDescr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SkillDescr>
                            </div>
                        </SkillWrapper>
                        <SkillWrapper>
                            <SkillsIcon src={mobile} alt=""/>
                            <div>
                                <SkillTitle>Разработка приложений</SkillTitle>
                                <SkillDescr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SkillDescr>
                            </div>

                        </SkillWrapper>
                        <SkillWrapper>
                            <SkillsIcon src={pcUi} alt=""/>
                            <div>
                                <SkillTitle>UI/UX Design</SkillTitle>
                                <SkillDescr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SkillDescr></div>
                        </SkillWrapper>

                    </SkillsGrid>
                </div>

            </AboutMeSection>
        )
    }

}