import React from 'react';
import styled from 'styled-components';

const PriceSection = styled.section`
    min-height: 280px;
    margin-top: 66px;
`, Heading = styled.h2`
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
`, Line = styled.div`
    width: 60px;
    margin: 25px auto 0;
    border: 1.5px solid rgb(255, 165, 1);
`, GridWrapper = styled.div`
    margin: 111px 0 0 150px;
    display: grid;
    grid-template-columns: repeat(2, 373px);
    gap: 299px;
`, GridItem = styled.div`
    margin-top: 20px;
`, NameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`, NameItem = styled.div`
    font-size: 14px;
    position: relative;
    &:before {
        content: '';
        background: rgb(255, 165, 1);
        position: absolute;
        z-index: -1;
        border-radius: 100%;
        width: 15px;
        height: 15px;
        left: -24px;
        top: 2px;
    }
`, PriceItem = styled.div`
    font-size: 14px;
`, DescriptionItem = styled.p`
    font-size: 12px;
    margin-top: 5px;
`
export default class Price extends React.Component {
    render() {
        return(
            <PriceSection>
                <Heading>Прайс-лист</Heading>
                <Line></Line>
                <GridWrapper>
                    <div>
                        <GridItem>
                        <NameWrapper>
                            <NameItem>Landing-page</NameItem>
                            <PriceItem>от 80$</PriceItem>
                        </NameWrapper>
                        <DescriptionItem>Одностраничный сайт для презентации услуг/товаров/...</DescriptionItem>
                            </GridItem>
                        <GridItem>
                            <NameWrapper>
                                <NameItem>Корпоративный сайт</NameItem>
                                <PriceItem>от 200$</PriceItem>
                            </NameWrapper>
                            <DescriptionItem>Сайт для вашего бизнеса или компании</DescriptionItem>
                        </GridItem>
                        <GridItem>
                            <NameWrapper>
                                <NameItem>Интернет-магазин</NameItem>
                                <PriceItem>от 300$</PriceItem>
                            </NameWrapper>
                            <DescriptionItem>Инструмент для ваших продаж в сети</DescriptionItem>
                        </GridItem>
                    </div>
                    <div>
                        <GridItem>
                            <NameWrapper>
                                <NameItem>Web-приложение</NameItem>
                                <PriceItem>от 280$.</PriceItem>
                            </NameWrapper>
                            <DescriptionItem>Приложение внутри браузера для лучшего комфорта</DescriptionItem>
                        </GridItem>
                        <GridItem>
                            <NameWrapper>
                                <NameItem>Android/IOS Приложение</NameItem>
                                <PriceItem>от 250$</PriceItem>
                            </NameWrapper>
                            <DescriptionItem>Приложение для смартфона любой ОС</DescriptionItem>
                        </GridItem>
                        <GridItem>
                            <NameWrapper>
                                <NameItem>Дизайн</NameItem>
                                <PriceItem>Индивидуально</PriceItem>
                            </NameWrapper>
                            <DescriptionItem>Создам дизайн для вашего сайта/приложения...</DescriptionItem>
                        </GridItem>
                    </div>
                </GridWrapper>
            </PriceSection>
        )
    }
}