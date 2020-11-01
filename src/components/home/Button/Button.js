import React from 'react';
import styled from 'styled-components';

const Styledbutton = styled.div`
    {
    height: 42px;
    border: solid 0.75px;
    border-color: $color_dark_gray;
    box-sizing: border-box;
    line-height: 42px;
    padding: 0 20px;
    }
`;

function Button({ children, fontsize }) {
    return (
        <Styledbutton style={{ fontSize: fontsize }}>
            {children}
        </Styledbutton>
    )
}

export default Button