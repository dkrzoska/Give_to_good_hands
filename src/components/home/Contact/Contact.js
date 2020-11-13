import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
// import { colors } from '../../settings/settings';
import backgroundcontact from '../../../assets/Background-Contact-Form.jpg'

const Styleddiv = styled.div`
    {
        height: 1026px;
        // background: url(${backgroundcontact});
        background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundcontact});
        .div-right {
            width: 528px;
            padding-top: 200px;
            margin-left: auto;
            margin-right: 142px;
        }
        form {
            margin-top: 70px;
            label {
                font-weight: 600;
            }
            input {
                background: none;
                font-size: 18px;
                line-height: 24px;
                border: none;
                border-bottom: 1px solid #707070;
                outline: none;
                &::placeholder {
                    color: #3C3C3C26;
                }
            }
            .name-and-email {
                display: flex;
                justify-content: space-between;
                label {
                    height: 62px;
                    width: 256px;
                    font-size: 16px;
                    line-height: 22px;
                    input {
                        box-sizing: border-box;
                        width: 100%;
                    }
                }
            }
            textarea {
                width: 100%;
                background: none;
                font-family: Open Sans,sans-serif;
                font-size: 18px;
                line-height: 24px;
                resize: none;
                border: none;
                border-bottom: 1px solid #707070;
                outline: none;
                margin-bottom: 40px;
                &::placeholder {
                    color: #3C3C3C26;
                    }
                }
            }
            .button {
                float: right;
                P {
                    text-align: center;
                    line-height: 48.5px;
                }
            }
        }
    }

`

function Contact() {
    return (
        <Styleddiv>
            <div className='div-right'>
                <Divwithdecoration fontsize='38px' lineheight='55px'>
                    <p>Skontaktuj się z nami</p>
                </Divwithdecoration>
                <form>
                    <div className='name-and-email'>
                        <label htmlFor="name">Wpisz swoje imię <br />
                            <input type="text" id="name" name="name" placeholder='Krzysztof' />
                        </label><br />
                        <label htmlFor="email">Wpisz swój email<br />
                            <input type="email" id="email" name="email" placeholder='abc@xyz.pl' />
                        </label>
                    </div>
                    <label htmlFor="message">Wpisz swoją wiadomość<br />
                        <textarea id="message" name="message" rows={4} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                    </label>
                    <div className='button'>
                        <Button
                            height='50px'
                            width='150px'
                            border='0.75px solid #3C3C3C'
                        >
                            <p>Wyślij</p>
                        </Button>
                    </div>
                </form>
            </div>
            <Footer />
        </Styleddiv>
    )
}

export default Contact
