import React from 'react';
import styled from 'styled-components';
import {colors} from '../../settings/settings';

const Styledstep = styled.div`
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${props => props.fontsizeh6};
        line-height: ${props => props.lineheighth6};
        margin: 0 86px;
        h6 {
            text-align: center;
            margin: 8px 0;
        }
        p {
            font-size: ${props => props.fontsizep};
            line-height: ${props => props.lineheightp};
            text-align: center;
            margin-top: 10px;
        }
        div {
            width: 70px;
            border-top: solid 1px #707070;
        }
    }
`;

function Step({icon, step, description, fontsizeh6, lineheighth6, fontsizep, lineheightp}) {
    return (
        <Styledstep
            fontsizeh6={fontsizeh6}
            lineheighth6={lineheighth6}
            fontsizep={fontsizep}
            lineheightp={lineheightp}
        >
            <img src={icon} />
            <h6>{step}</h6>
            <div></div>
            <p>{description}</p>
        </Styledstep>
    )
}

export default Step
