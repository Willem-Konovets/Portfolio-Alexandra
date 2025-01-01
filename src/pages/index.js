import * as React from "react";
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";

import Introduce from './modules/Introduce';
import AboutMe from "./modules/AboutMe";
import Experience from "./modules/Experience";
import Skills from "./modules/Skills";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    a{
        background: none;
        text-decoration: none;
        color: inherit;
    }
    button {
        background: rgb(255, 165, 1);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
        border: none;
        cursor: pointer;
    }
    h3{
        font-weight: 500;
    }  
`, Container = styled.div`
    width: 90%;
    margin: 0 auto;
`
export default  class IndexPage extends Component {
    render() {
        return(
            <>
                <GlobalStyle/>
                <Introduce/>
            <Container>
                <AboutMe/>
                <Experience/>
                <Skills/>
            </Container>
            </>

        )
}

}