import React from 'react';
import styled from 'styled-components';
import {Component} from "react";

import circle from '../../images/icon/Circle.svg'
import university from '../../images/icon/University.svg'
import designer from '../../images/icon/Designer.svg'
import developer from '../../images/icon/Developer.svg'
import courses from '../../images/icon/Courses.svg'


const ExperienceSection = styled.section`
    min-height: 559px;
    margin-top: 120px;
    padding-left: 133px;
    padding-right: 89px;
    position: relative;
`, Heading = styled.h2`
    font-size: 16px;
    text-align: center;
    position: relative;
    &:before{
        content: '';
        background: url(${circle}) center center no-repeat;
        width: 36px;
        height: 36px;
        display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
        position: absolute; /* Установите позицию, если это необходимо */
        left: 552px;
        top: -7px;
        z-index: -1;
    }
`, Title = styled.h2`
    font-size: 36px;
    text-align: center;
`, Line = styled.div`
    border: 2px solid rgb(255, 165, 1);
    width: 60px;
    height: 0;
    margin: 25px auto 0;
`, ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 235px;
`, ExperienceWrapper = styled.div`
    display: flex;
    flex-direction: column;
`, ExperienceTitle = styled.h2`
    margin-top: 64px;
    font-size: 20px;    
`, ConnectLine = styled.div`
    height: 386px;
    border: 1px solid rgb(0, 0, 0);
    width: 0;
    position: absolute;
    top: 183px;
    left: 71px;
    z-index: 1;
    &:before {
        content: '';
        background: url(${circle}) center center no-repeat;
        border-radius: 100%;
        width: 15px;
        height: 15px;
        display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
        position: absolute; /* Установите позицию, если это необходимо */
        z-index: -1;
        left: -7.4px;
        top: -3px
    }
    ${props => props.isLast && `
        top: 183px;
        left: 760px;
    `}
`, ExperienceBlock = styled.div`
    display: flex;
    margin-top: 45px;
    flex-wrap: wrap;
`,  ExperienceIcon = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-right: 19px;
    &:before {
        content: '';
        background: url(${circle}) center center no-repeat;
        width: 36px;
        height: 36px;
        display: inline-block; /* Или block, если вам нужно, чтобы элемент занимал всю ширину */
        position: absolute; /* Установите позицию, если это необходимо */
        z-index: -1;
        left: -16px;
        top: -1px;
    }
    &:after{
        content: '';
        width: 42px;
        height: 0;
        border: 1px solid rgb(0, 0, 0);
        position: absolute;
        top: 17px;
        left: -60px;
    }
`, ExperienceName = styled.h2`
    font-size: 14px;
`, ExperienceDescription = styled.h3`
    font-size: 12px;
`, ExperienceExplanation = styled.h3`
    max-width: 375px;
    margin-top: 12px;
    font-size: 12px;
`
export default class Experience extends Component {
    render() {
        return(
            <ExperienceSection>
                <Heading>
                    Опыт
                </Heading>
                <Title>
                    Чем я буду полезна
                </Title>
                <Line></Line>
                <ExperienceGrid>
                    <ExperienceWrapper>
                        <ConnectLine></ConnectLine>
                        <ExperienceTitle>Образование</ExperienceTitle>
                        <ExperienceBlock>
                            <ExperienceIcon>
                                <img src={university} alt=""/>
                            </ExperienceIcon>
                            <div>
                            <ExperienceName>МГТУ им. Н. Э. Баумана</ExperienceName>
                                <ExperienceDescription>Диплом магистра | Москва (2014-2020)</ExperienceDescription>
                            </div>
                            <ExperienceExplanation>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
                                debitis deleniti eaque eos mollitia nostrum omnis praesentium recusandae sunt.
                                Consequuntur magni necessitatibus nisi nobis nostrum quae recusandae soluta
                                voluptatum?</ExperienceExplanation>
                        </ExperienceBlock>
                        <ExperienceBlock>
                            <ExperienceIcon>
                                <img src={courses} alt=""/>
                            </ExperienceIcon>
                            <div>
                                <ExperienceName>Udemy</ExperienceName>
                                <ExperienceDescription>Курсы по Web-разработке </ExperienceDescription>
                            </div>
                            <ExperienceExplanation>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
                                debitis deleniti eaque eos mollitia nostrum omnis praesentium recusandae sunt.
                                Consequuntur magni necessitatibus nisi nobis nostrum quae recusandae soluta
                                voluptatum?</ExperienceExplanation>
                        </ExperienceBlock>
                    </ExperienceWrapper>
                    <ExperienceWrapper>
                        <ConnectLine isLast={true}></ConnectLine>
                        <ExperienceTitle>Опыт работы</ExperienceTitle>
                        <ExperienceBlock>
                            <ExperienceIcon>
                                <img src={developer} alt=""/>
                            </ExperienceIcon>
                            <div>
                                <ExperienceName>Front-End Developer</ExperienceName>
                                <ExperienceDescription>EPAM | Москва (2018-2019)</ExperienceDescription>
                            </div>
                            <ExperienceExplanation>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
                                debitis deleniti eaque eos mollitia nostrum omnis praesentium recusandae sunt.
                                Consequuntur magni necessitatibus nisi nobis nostrum quae recusandae soluta
                                voluptatum?</ExperienceExplanation>
                        </ExperienceBlock>
                        <ExperienceBlock>
                            <ExperienceIcon>
                                <img src={designer} alt=""/>
                            </ExperienceIcon>
                            <div>
                                <ExperienceName>UI/UX Designer</ExperienceName>
                                <ExperienceDescription>Squad Team | Москва (2018)</ExperienceDescription>
                            </div>
                            <ExperienceExplanation>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
                                debitis deleniti eaque eos mollitia nostrum omnis praesentium recusandae sunt.
                                Consequuntur magni necessitatibus nisi nobis nostrum quae recusandae soluta
                                voluptatum?</ExperienceExplanation>
                        </ExperienceBlock>
                    </ExperienceWrapper>
                </ExperienceGrid>
            </ExperienceSection>
        )
    }
}