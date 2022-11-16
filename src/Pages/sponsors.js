import React from 'react';
import styled, { css } from 'styled-components'
import './pages.css';

function Sponsors() {
    const Title = styled.h1`
    color: white;
    padding: 30px;
    margin: 30px;      
`
    return (

        <div className="content">
            <Title id = "sponsors"> sponsors </Title>
            
        </div>

    );
}

export default Sponsors;