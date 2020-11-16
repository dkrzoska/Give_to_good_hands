import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { colors } from '../../settings/settings';
import homeheroimage from '../../../assets/Home-Hero-Image.jpg';
import { Link } from 'react-router-dom';

const Styledmain = styled.div`
    height: 963px;
    display: flex;
`;

const Styledleftdiv = styled.div`
    height: 963px;
    width: 885px;
    background: url(${homeheroimage});
    background-position: 100% 50%;
`;

const Styledrightdiv = styled.div`
    width: 873px;
`;

const Styleddivwithbuttons = styled.div`
    {
        display: flex;
        justify-content: center;
        margin-top: 31px;
        p {
            text-align: center;
            line-height: 47px;
        }
    }
`;

const buttonprops = {
    height: '120px',
    width: '310px',
    fontsize: '36px',
    fontcolor: colors.color_dark_gray,
    fontweight: '300',
    texttransform: 'uppercase',
    border: '0.75px solid',
    bordercolor: colors.color_dark_gray,
    margin: '0 22px',
    padding: '13px 0'
}

function Main() {
    return (
        <Styledmain id='start'>
            <Styledleftdiv />
            <Styledrightdiv>
                <Header />
                <Menu />
                <Divwithdecoration fontsize='38px' lineheight='53px'>
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                </Divwithdecoration>
                <Styleddivwithbuttons>
                    <Button {...buttonprops} >
                        <p><Link to="/login">oddaj<br/>rzeczy</Link></p>
                    </Button>
                    <Button {...buttonprops} >
                        <p><Link to="/login">zoragnizuj<br/>zbiórkę</Link></p>
                    </Button>
                </Styleddivwithbuttons>
            </Styledrightdiv>
        </Styledmain>
    )
}

export default Main