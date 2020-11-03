import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../settings/settings';

const Styledbutton = styled.div`
    {
        font-family: ${fonts.font_base};
        height: 42px;
        border: solid 0.75px;
        border-color: ${colors.color_dark_gray};
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