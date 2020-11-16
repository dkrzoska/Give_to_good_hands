import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Step from '../Step/Step';
import Button from '../Button/Button';
import icon1 from '../../../assets/Icon-1.svg';
import icon2 from '../../../assets/Icon-2.svg';
import icon3 from '../../../assets/Icon-3.svg';
import icon4 from '../../../assets/Icon-4.svg';
import { Link } from 'react-router-dom';

const Styledsimplesteps = styled.div`
    {
        .steps {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                height: 325px;
                background: ${colors.color_white};
                margin-bottom: 35px;
                padding: 73px 328px 0 328px;
            }
        .button__p {
            line-height: 47px;
            text-align: center;
        }
    }
`;

const stepprops = {
    fontsizeh6: '18px',
    lineheighth6: '24px',
    fontsizep: '16px',
    lineheightp: '20px'
}

const buttonprops = {
    height: '120px',
    width: '310px',
    fontsize: '36px',
    fontcolor: colors.color_dark_gray,
    fontweight: '300',
    texttransform: 'uppercase',
    border: '0.75px solid',
    bordercolor: colors.color_dark_gray,
    margin: '0 auto',
    padding: '13px 0'
}

function Simplesteps() {
    return (
        <Styledsimplesteps>
            <Divwithdecoration fontsize='38px' lineheight='55px'>
                <p>Wystarczą 4 proste kroki</p>
            </Divwithdecoration>
            <div className='steps'>
                <Step
                    icon={icon1}
                    step='Wybierz rzeczy'
                    description='ubrania, zabawki, sprzęt i inne'
                    {...stepprops}
                />
                <Step
                    icon={icon2}
                    step='Spakuj je'
                    description='skorzystaj z worków na śmieci'
                    {...stepprops}
                />
                <Step
                    icon={icon3}
                    step='Zdecyduj komu chcesz pomóc'
                    description='wybierz zaufane miejsce'
                    {...stepprops}
                />
                <Step
                    icon={icon4}
                    step='Zamów kuriera'
                    description='kurier przyjedzie w dogodnym terminie'
                    {...stepprops}
                />

            </div>
            <Button {...buttonprops} >
                <p className='button__p'><Link to="/login">oddaj<br/>rzeczy</Link></p>
            </Button>
        </Styledsimplesteps>
    )
}

export default Simplesteps
