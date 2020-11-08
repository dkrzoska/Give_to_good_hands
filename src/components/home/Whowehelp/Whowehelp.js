import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Button from '../Button/Button';
import { colors } from '../../settings/settings';

const Styledwhowehelp = styled.div`
    {
        .buttons {
            display: flex;
            justify-content: space-between;
            width: 750px;
            margin: 0 auto;
        }
        .button__div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
        }
    }
`

function Whowehelp() {
    return (
        <Styledwhowehelp>
            <Divwithdecoration fontsize='38px' lineheight='55px'>
                <p>Komu pomagamy?</p>
            </Divwithdecoration>
            <div className='buttons'>
                <Button
                    height='79px'
                    width='208px'
                    fontsize='24px'
                    border='solid 0.75px'
                    bordercolor='#fff'
                    borderhover='solid 0.75px'
                    bordercolorhover={colors.color_gray}
                    margin='0'
                    padding='0'
                >
                    <p className='button__div'>Fundacjom</p>
                </Button>
                <Button
                    height='79px'
                    width='208px'
                    fontsize='24px'
                    border='solid 0.75px'
                    bordercolor='#fff'
                    borderhover='solid 0.75px'
                    bordercolorhover={colors.color_gray}
                    margin='0'
                    padding='0'
                >
                    <p className='button__div'>Organizacjom pozarządowym</p>
                </Button>
                <Button
                    height='79px'
                    width='208px'
                    fontsize='24px'
                    border='solid 0.75px'
                    bordercolor='#fff'
                    borderhover='solid 0.75px'
                    bordercolorhover={colors.color_gray}
                    margin='0'
                    padding='0'
                >
                    <p className='button__div'>Lokalnym zbiórkom</p>
                </Button>
            </div>
        </Styledwhowehelp>
    )
}

export default Whowehelp
