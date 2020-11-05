import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { colors } from '../../settings/settings';

const Styledmenu = styled.div`
    display: flex;
`;

function Menu() {
    return (
        <Styledmenu>
            <Button
                fontsize='18px'
                fontcolor={colors.color_dark_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_dark_gray}
                padding='9px 20px'
            >
                Start
            </Button>
            <Button
                fontsize='18px'
                fontcolor={colors.color_dark_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_dark_gray}
                padding='9px 20px'
            >
                O co chodzi?
            </Button>
            <Button
                fontsize='18px'
                fontcolor={colors.color_dark_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_dark_gray}
                padding='9px 20px'
            >
                O nas
                </Button>
            <Button
                fontsize='18px'
                fontcolor={colors.color_dark_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_dark_gray}
                padding='9px 20px'
            >
                Fundacja i organizacje
            </Button>
            <Button
                fontsize='18px'
                fontcolor={colors.color_dark_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_dark_gray}
                padding='9px 20px'
            >
                Kontakt
            </Button>
        </Styledmenu>
    )
}

export default Menu
