import React from 'react';
import styled from 'styled-components';

import photo from '../../images/img/PhotoAlexandra.jpeg';
import facebook from '../../images/icon/Facebook.svg';
import instagram from '../../images/icon/Instagram.svg';
import telegram from '../../images/icon/Telegram.svg';

const ContactsSection = styled.section`
    min-height: 600px;
    margin: 120px 0 91px 0;
    display: grid;
    grid-template-columns: 400px 585px;
    gap: 68px;
    
`, ContactsWrapper = styled.div`
    
`, Heading = styled.h2`
    font-size: 16px;
    position: relative;
    &:before {
        content: '';
        background: rgb(255, 165, 1);
        position: absolute;
        z-index: -1;
        border-radius: 100%;
        width: 36px;
        top: -6px;
        left: -12px;
        height: 36px;
    }
`, Title = styled.h2`
    font-size: 36px;
`, Line = styled.div`
    width: 60px;
    border: 1.5px solid rgb(255, 165, 1);
`, Sub = styled.h3`
    font-size: 14px;
    margin-top: 22px;
`, IconsWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
`, Icon = styled.img`
    transform: rotate(90.00deg);
    width: 30px;
    height: 30px;
`
export default class Contacts extends React.Component {
    render() {
        return(
            <ContactsSection>
                <img src={photo} alt=""/>
                <ContactsWrapper>
                    <Heading>Контакты</Heading>
                    <Title>Свяжитесь со мной</Title>
                    <Line></Line>
                    <Sub>Любым удобным для вас способом:</Sub>
                    <IconsWrapper>
                        <Icon src={facebook} alt=""/>
                        <Icon src={telegram} alt=""/>
                        <Icon src={instagram} alt=""/>
                    </IconsWrapper>
                    <Sub>Или оставьте ваши данные и я сама вам напишу:</Sub>
                </ContactsWrapper>
            </ContactsSection>
        )
    }
}