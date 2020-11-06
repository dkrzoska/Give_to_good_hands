import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { colors } from '../../settings/settings';

const Styledmenu = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 210px;
`;

const buttonprops = {
    fontsize: '18px',
    fontcolor: colors.color_dark_gray,
    border: '0.75px solid #fff',
    borderhover: '0.75px solid',
    bordercolorhover: colors.color_dark_gray,
    padding: '9px 20px'
}

function Menu() {
    return (
        <Styledmenu>
            <Button {...buttonprops} >
                Start
            </Button>
            <Button {...buttonprops} >
                O co chodzi?
            </Button>
            <Button {...buttonprops} >
                O nas
                </Button>
            <Button {...buttonprops} >
                Fundacja i organizacje
            </Button>
            <Button {...buttonprops} >
                Kontakt
            </Button>
        </Styledmenu>
    )
}

export default Menu
