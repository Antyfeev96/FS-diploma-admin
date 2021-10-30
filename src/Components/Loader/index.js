import React from 'react';
import styled from 'styled-components'
import spinner from '../../Assets/Spinner.svg'

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    background-color: black;
    opacity: .8;
`

const Loader = styled.div`
    width: 25%;
    min-width: 230px;
    height: 25%;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 10px;
`

const MyComponent = () => {
    return (
        <Container>
            <Loader>
                <img src={spinner} alt="spinner"/>
            </Loader>
        </Container>
    );
};

export default MyComponent;
