import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Styledheader = styled.div`
    display: flex;
`;

function Header() {
    return (
        <Styledheader>
            <Button>Zaloguj</Button>
            <Button>Załóż konto</Button>
        </Styledheader>
    )
}

export default Header
