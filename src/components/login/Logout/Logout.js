import React from 'react'
import styled from 'styled-components';
import Button from '../../home/Button/Button';
import Divwithdecoration from '../../home/Divwithdecoration/Divwithdecoration';
import Header from '../../home/Header/Header';
import Menu from '../../home/Menu/Menu';
import { colors } from '../../settings/settings';

const Styleddiv = styled.div`
{
    width: 1858px;
}
`

const buttonprops = {
    height: '50px',
    fontsize: '18px',
    fontcolor: colors.color_dark_gray,
    border: '0.75px solid #fff',
    borderhover: '0.75px solid',
    bordercolorhover: colors.color_dark_gray,
    padding: '13px 11px'
}

function Login() {
    return (
        <Styleddiv>
            <Header />
            <Menu />
            <Divwithdecoration fontsize='40px' lineheight='55px'>
                <p>Wylogowanie nastąpiło pomyślnie!</p>
            </Divwithdecoration>
            <Button {...buttonprops}>
                <p>Strona główna</p>
            </Button>
        </Styleddiv>
    )
}

export default Login