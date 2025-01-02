import React from "react";
import styled from "styled-components";

import Uber from "../../images/img/Uber.jpeg";
import Mac from "../../images/img/Mac.jpeg";
import Ipad from "../../images/img/Ipad.jpeg";
import Plans from "../../images/img/Plans.jpeg";
import Pulse from "../../images/img/Pulse.jpeg";
import Bread from "../../images/img/Bread.jpeg";





const MyWorksSection = styled.section`
    height: 746px;
    margin-top: 126px;
`;

const Heading = styled.h2`
    font-size: 16px;
    text-align: center;
    position: relative;
    &:before {
        content: '';
        background: rgb(255, 165, 1);
        position: absolute;
        z-index: -1;
        border-radius: 100%;
        width: 36px;
        left: 663px;
        top: -6px;
        height: 36px;
    }
`;

const Title = styled.h2`
    font-size: 36px;
    margin-top: 5px;
    text-align: center;
`;

const Line = styled.div`
    width: 60px;
    margin: 15px auto 0;
    border: 2px solid rgb(255, 165, 1);
`;

// Новый контейнер для сетки
const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
        "item1 item2 item3 item4"
        "item5 item6 item6 item4";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    margin: 40px auto;
    width: 90%;
    gap: 5px;
`;


// Стили для элементов сетки
const GridItem = styled.div`
    background-size: cover;
    background-position: center;
    min-height: 200px;
    
`;

const Item1 = styled(GridItem)`
    grid-area: item1;
    background: url(${Uber}) no-repeat  center center;
    background-size: cover;
`;

const Item2 = styled(GridItem)`
    grid-area: item2;
    background: url(${Pulse}) no-repeat  center center;
    background-size: cover;
`;

const Item3 = styled(GridItem)`
    grid-area: item3;
    background: url(${Bread}) no-repeat  center center;
    background-size: cover;
`;

const Item4 = styled(GridItem)`
    grid-area: item4;
    background: url(${Plans}) no-repeat  center center;
    background-size: cover;
`;

const Item5 = styled(GridItem)`
    grid-area: item5;
    background: url(${Ipad}) no-repeat  center center;
    background-size: cover;
`;

const Item6 = styled(GridItem)`
    grid-area: item6;
    background: url(${Mac}) no-repeat  center center;
    background-size: cover;
`;

export default class MyWorks extends React.Component {
    render() {
        return (
            <MyWorksSection>
                <Heading>Портфолио</Heading>
                <Title>Мои работы</Title>
                <Line />
                {/* Новый блок сетки */}
                <GridContainer>
                    <Item1 />
                    <Item2 />
                    <Item3 />
                    <Item4 />
                    <Item5 />
                    <Item6 />
                </GridContainer>
            </MyWorksSection>
        );
    }
}
