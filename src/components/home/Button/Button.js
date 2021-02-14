import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../settings/settings';

const Styledbutton = styled.div`
    {
        box-sizing: border-box;
        height: ${props => props.height};
        width: ${props => props.width};
        // font-family: ${fonts.font_base};
        font-size: ${props => props.fontsize};
        color: ${props => props.fontcolor};
        font-weight: ${props => props.fontweight};
        border: ${props => props.border};
        border-color: ${props => props.bordercolor};
        text-transform: ${props => props.texttransform};
        &:hover {
            border: ${props => props.borderhover};
            border-color: ${props => props.bordercolorhover};
        }
        margin: ${props => props.margin};
        padding: ${props => props.padding};
        cursor: pointer;
    }
`;

function Button({ children, height, width, fontsize, fontcolor, fontweight, texttransform, border, bordercolor, borderhover, bordercolorhover, margin, padding }) {
    return (
        <Styledbutton
            height={height}
            width={width}
            fontsize={fontsize}
            fontcolor={fontcolor}
            fontweight={fontweight}
            texttransform={texttransform}
            border={border}
            bordercolor={bordercolor}
            borderhover={borderhover}
            bordercolorhover={bordercolorhover}
            margin={margin}
            padding={padding}>
            {children}
        </Styledbutton>
    )
}

export default Button