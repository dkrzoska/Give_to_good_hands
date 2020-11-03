import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';

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
                    <Button fontsize='20px'>oddaj rzeczy</Button>
                    <Button>zoragnizuj zbiórkę</Button>
                </Styleddivwithbuttons>
            </Styledrightdiv>
        </Styledmain>
    )
}

export default Main