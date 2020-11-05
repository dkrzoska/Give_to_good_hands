import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { colors } from '../../settings/settings';

const Styledheader = styled.div`
    display: flex;
`;

function Header() {
    return (
        <Styledheader>
            <Button
                fontsize='13px'
                fontcolor={colors.color_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_yellow}
                padding='9px 10px'
            >
                Zaloguj
            </Button>
            <Button
                fontsize='13px'
                fontcolor={colors.color_gray}
                border='0.75px solid #fff'
                borderhover='0.75px solid'
                bordercolorhover={colors.color_yellow}
                padding='9px 10px'
            >
                Załóż konto
            </Button>
        </Styledheader>
    )
}

export default Header
