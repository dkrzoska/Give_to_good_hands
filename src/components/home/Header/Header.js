import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { colors } from '../../settings/settings';
import { Link } from 'react-router-dom';

const Styledheader = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 37px 0 17px 0;
`;

const buttonprops = {
    fontsize: '13px',
    fontcolor: colors.color_gray,
    border: '0.75px solid #fff',
    borderhover: '0.75px solid',
    bordercolorhover: colors.color_yellow,
    padding: '9px 10px'
}

function Header() {
    return (
        <Styledheader>
            <Button {...buttonprops} >
                <Link to="/login">Zaloguj</Link>
            </Button>
            <Button {...buttonprops}  >
                <Link to="/register">Załóż konto</Link>
            </Button>
        </Styledheader>
    )
}

export default Header
