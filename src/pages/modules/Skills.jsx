import React from 'react';
import styled from 'styled-components';


import html from '../../images/icon/html5.svg'
import css from '../../images/icon/css3.svg'
import js from '../../images/icon/JS.svg'
import jquery from '../../images/icon/Jquery.svg'
import react from '../../images/icon/react.svg'
import mangoDb from '../../images/icon/Mongo.db.svg'
import nodeJs from '../../images/icon/Node.js.svg'


const SkillSection = styled.div`
    height: 1200px;
    margin-top: 120px;
`,Heading = styled.h2`
    font-size: 16px;
    position: relative;
    text-align: center;
    &:after{
        content: '';
        width: 36px;
        height: 36px;
        background: rgb(255, 165, 1);
        position: absolute;
        left: 663px;
        top: -6px;
        z-index: -1;
        border-radius: 100%;
    }
`,Title = styled.h1`
    text-align: center;
    margin-top: 16px;
`, Line = styled.div`
    width: 60px;
    margin: 35px auto 0;
    border: 2px solid rgb(255, 165, 1);
`, WrapperTools = styled.div`
    margin-top: 62px;
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: repeat(2, 300px);
    column-gap: 30px;
    row-gap: -3px;
`, CardTool = styled.div`
    width: 285px;
    padding-left: 30px;
    border: 1px solid rgb(0, 0, 0);
    max-height: 270px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
`, NameTool = styled.h2`
    font-size: 14px;
    margin-top: 20px;
`, DescrTool = styled.p`
    margin-top: 15px;
    font-size: 12px;
    line-height: 18px;
    width: 250px;
`, WrapperSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 375px);
    grid-template-rows: repeat(2, 140px);
    justify-content: space-between;
    align-content: space-between;
    gap: 45px;
    margin-top: 128px;
`, WrapperItemSkills = styled.div`

`,NameSkill = styled.h2`
    font-size: 14px;
    position: relative;
    padding-left: 10px;
    &:before{
        content: '';
        width: 36px;
        height: 36px;
        background: rgb(255, 165, 1);
        position: absolute;
        left: -3px;
        top: -9px;
        z-index: -1;
        border-radius: 100%;
    }
`, PercentageSkill = styled.h3`
    font-size: 14px;
`, ProgressSkill = styled.div`
    border-radius: 4px;
    height: 14px;
    width: 100%;
    background: rgb(232, 228, 222);
    position: relative;
    margin-top: 27px;
`, Span = styled.div`
    position: relative;
    display: block;
    height: 100%;
    border-radius: 4px;
    background: rgb(255, 165, 1);
    z-index: 5;
`
export default class Skills extends React.Component{
    render() {
        return(
            <SkillSection>
                <Heading>Навыки</Heading>
                <Title>Что я использую в работе</Title>
                <Line></Line>
                <WrapperTools>
                    <CardTool>
                        <img src={html} alt=""/>
                        <NameTool>HTML5</NameTool>
                        <DescrTool>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта</DescrTool>
                    </CardTool>
                    <CardTool>
                        <img src={css} alt=""/>
                        <NameTool>CSS3</NameTool>
                        <DescrTool>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</DescrTool>
                    </CardTool>
                    <CardTool>
                        <img src={js} alt=""/>
                        <NameTool>Java Script</NameTool>
                        <DescrTool>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</DescrTool>
                    </CardTool>
                    <CardTool>
                        <img src={jquery} alt=""/>
                        <NameTool>Jquery</NameTool>
                        <DescrTool>Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует</DescrTool>
                    </CardTool>
                    <CardTool>
                        <img src={react} alt=""/>
                        <NameTool>React</NameTool>
                        <DescrTool>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели</DescrTool>
                    </CardTool>
                    <CardTool>
                        <img src={mangoDb} alt=""/>
                        <NameTool>Node.js</NameTool>
                        <DescrTool>Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит</DescrTool>
                    </CardTool>
                    <CardTool>
                        <img src={nodeJs} alt=""/>
                        <NameTool>Mongo.db</NameTool>
                        <DescrTool>Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения</DescrTool>
                    </CardTool>
                </WrapperTools>
                <WrapperSkills>
                    <WrapperItemSkills>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <NameSkill>Создание сайтов</NameSkill>
                            <PercentageSkill>100%</PercentageSkill>
                        </div>
                        <ProgressSkill>
                            <Span style={{ width: '100%'}}></Span>
                        </ProgressSkill>
                    </WrapperItemSkills>
                    <WrapperItemSkills>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <NameSkill>Создание приложений</NameSkill>
                            <PercentageSkill>85%</PercentageSkill>
                        </div>
                        <ProgressSkill>
                            <Span style={{ width: '85%'}}></Span>
                        </ProgressSkill>
                    </WrapperItemSkills>
                    <WrapperItemSkills>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <NameSkill>Работа с данными</NameSkill>
                            <PercentageSkill>90%</PercentageSkill>
                        </div>
                        <ProgressSkill>
                            <Span style={{ width: '90%'}}></Span>
                        </ProgressSkill>
                    </WrapperItemSkills>
                    <WrapperItemSkills>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <NameSkill>Креативность</NameSkill>
                            <PercentageSkill>75%</PercentageSkill>
                        </div>
                        <ProgressSkill>
                            <Span style={{ width: '75%'}}></Span>
                        </ProgressSkill>
                    </WrapperItemSkills>
                    <WrapperItemSkills>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <NameSkill>Создание дизайна</NameSkill>
                            <PercentageSkill>90%</PercentageSkill>
                        </div>
                        <ProgressSkill>
                            <Span style={{ width: '90%'}}></Span>
                        </ProgressSkill>
                    </WrapperItemSkills>
                    <WrapperItemSkills>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <NameSkill>Soft skills</NameSkill>
                            <PercentageSkill>95%</PercentageSkill>
                        </div>
                        <ProgressSkill>
                            <Span style={{ width: '95%'}}></Span>
                        </ProgressSkill>
                    </WrapperItemSkills>
                </WrapperSkills>
            </SkillSection>
        )
    }

}