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
                <Link to='/'>Start</Link>
            </Button>
            <Button {...buttonprops} >
                <Link to='whatisgoingon'>O co chodzi?</Link>
            </Button>
            <Button {...buttonprops} >
                <Link to='aboutus'>O nas</Link>
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
