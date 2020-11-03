import React from 'react';
import styled from 'styled-components';
import Column from '../Column/Column';

const Styledthreecolumns = styled.div`
    {
        display: flex;
        justify-content: space-around;
    }
`;

function Threecolumns() {
    return (
        <Styledthreecolumns>
            <Column />
            <Column />
            <Column />
        </Styledthreecolumns>
    )
}

export default Threecolumns
