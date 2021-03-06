import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './pages/Routing';

class App extends Component {
    render() {
        return (
            <Wrapper>
                <InnerWrapper>
                    <Routing />
                </InnerWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(131, 205, 255);
    background: linear-gradient(
        0deg,
        rgba(147, 211, 255, 1) 0%,
        rgba(34, 129, 170, 1) 100%
    );
    overflow: auto;
    max-width: 600px;
    margin: 0 auto;
`;

const InnerWrapper = styled.div`
    position: relative;
    text-align: center;
`;

export default App;
