import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { colors } from '../../settings/settings';

const Styledmain = styled.div`
    height: 500px;
    display: flex;
`;

const Styledleftdiv = styled.div`
    height: 100vh;
    width: 200px;
    background: url('../../../assets/Home-Hero-Image.jpg') no-repeat;
`;

const Styledrightdiv = styled.div`

`;

const Styleddivwithbuttons = styled.div`
    display: flex;
`;

function Main() {
    return (
        <Styledmain>
            <Styledleftdiv />
            <Styledrightdiv>
                <Header />
                <Menu />
                <Divwithdecoration fontsize='38px' lineheight='53px'>
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                </Divwithdecoration>
                <Styleddivwithbuttons>
                    <Button
                        height='120px'
                        width='310px'
                        fontsize='36px'
                        fontcolor={colors.color_dark_gray}
                        fontweight='300'
                        texttransform='uppercase'
                        border='0.75px solid'
                        bordercolor={colors.color_dark_gray}
                        margin='0 22px'
                    >
                        <p>oddaj</p>
                        <p>rzeczy</p>
                    </Button>
                    <Button
                        height='120px'
                        width='310px'
                        fontsize='36px'
                        fontcolor={colors.color_dark_gray}
                        fontweight='300'
                        texttransform='uppercase'
                        border='0.75px solid'
                        bordercolor={colors.color_dark_gray}
                        margin='0 22px'
                    >
                        <p>zoragnizuj</p>
                        <p>zbiórkę</p>
                    </Button>
                </Styleddivwithbuttons>
            </Styledrightdiv>
        </Styledmain>
    )
}

export default Main