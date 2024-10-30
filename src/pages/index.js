import * as React from "react";
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";

import Introduce from './modules/introduce';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    a{
        background: none;
        text-decoration: none;
        color: inherit;
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
            </>

        )
}

}