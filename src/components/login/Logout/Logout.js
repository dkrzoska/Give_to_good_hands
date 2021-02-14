import React from 'react'
import styled from 'styled-components';
import Button from '../../home/Button/Button';
import Divwithdecoration from '../../home/Divwithdecoration/Divwithdecoration';
import Header from '../../home/Header/Header';
import Menu from '../../home/Menu/Menu';
import { Link } from 'react-router-dom';
import { colors } from '../../settings/settings';

const Styleddiv = styled.div`
{
    width: 1858px;
    .logout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 440px;
        margin: 0 auto;
        p {
            text-align: center;
        }
    }
}
`

const buttonprops = {
    height: '50px',
    width: '150px',
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
            <div className='logout'>
                <Divwithdecoration fontsize='40px' lineheight='55px'>
                    <p>Wylogowanie nastąpiło pomyślnie!</p>
                </Divwithdecoration>
                <Button {...buttonprops}>
                    <p><Link to="/">Strona główna</Link></p>
                </Button>
            </div>

        </Styleddiv>
    )
}

export default Login