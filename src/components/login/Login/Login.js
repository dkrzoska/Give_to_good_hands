import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../home/Button/Button';
import Divwithdecoration from '../../home/Divwithdecoration/Divwithdecoration';
import Header from '../../home/Header/Header';
import Menu from '../../home/Menu/Menu';
import { colors } from '../../settings/settings';

const Styleddiv = styled.div`
{
    width: 1858px;
    .login-main {
        height: 325px;
        width: 515px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .login-and-pass {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 235px;
        width: 384.5px;
        background: ${colors.color_white};
        margin: 0 auto;
        margin-bottom: 40px;
        padding: 40px 0;
        label {
            font-size: 16px;
            line-height: 22px;
        }
        input {
            width: 250px;
            font-size: 32px;
            line-height: 40px;
            border: none;
            border-bottom: 1px solid ${colors.color_dark_gray};
            background: none;
        }
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: 0;
    }
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
                <p>Zaloguj się</p>
            </Divwithdecoration>
            <div className='login-main'>
                <form>
                    <div className='login-and-pass'>
                        <label htmlFor="email2">Email<br />
                            <input type="email" id="email2" name="email2" />
                        </label><br />
                        <label htmlFor="email">Hasło<br />
                            <input type="password" id="password" name="password" />
                        </label>
                    </div>
                    <div className='buttons'>
                        <Button {...buttonprops}>
                            <p><Link to="/rejestracja">Załóż konto</Link></p>
                        </Button>
                        <Button {...buttonprops} bordercolor= {colors.color_dark_gray}>
                            <p>Zaloguj się</p>
                        </Button>
                    </div>
                </form>
            </div>
        </Styleddiv>
    )
}

export default Login