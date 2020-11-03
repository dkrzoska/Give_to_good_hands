import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Step from '../Step/Step';

const Styledsimplesteps = styled.div`
    {
        .steps {
                display: flex;
                justify-content: center;
            }
    }
`;

function Simplesteps() {
    return (
        <Styledsimplesteps>
            <Divwithdecoration />
            <div className='steps'>
                <Step />
                <Step />
                <Step />
                <Step />
            </div>
        </Styledsimplesteps>
    )
}

export default Simplesteps
