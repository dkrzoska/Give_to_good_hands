import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import { Link } from 'react-router-dom';

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
                <a href='#start'>Start</a>
            </Button>
            <Button {...buttonprops} >
                <a href='#whatisgoingon'>O co chodzi?</a>
            </Button>
            <Button {...buttonprops} >
                <a href='#aboutus'>O nas</a>
            </Button>
            <Button {...buttonprops} >
                <a href='#whowehelp'>Fundacja i organizacje</a>
            </Button>
            <Button {...buttonprops} >
                <a href='#contact'>Kontakt</a>
            </Button>
        </Styledmenu>
    )
}

export default Menu
