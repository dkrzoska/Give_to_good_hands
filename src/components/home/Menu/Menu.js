import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const Styledmenu = styled.div`
    display: flex;
`;

function Menu() {
    return (
        <Styledmenu>
            <Button fontsize='18px'>Start</Button>
            <Button>O co chodzi?</Button>
            <Button>O nas</Button>
            <Button>Fundacja i organizacje</Button>
            <Button>Kontakt</Button>
        </Styledmenu>
    )
}

export default Menu
