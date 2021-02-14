import React from 'react';
import styled from 'styled-components';
import {colors} from '../../settings/settings';

const Styledcolumn = styled.div`
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 334px;
        color: ${colors.color_bronze};
        h1 {
            font-size: 90px;
            font-weight: 300;
            line-height: 122px;
        }
        h6 {
            font-size: 18px;
            line-height: 24px;
            text-transform: uppercase;
            margin: 10px 0 28px 0;
        }
        p {
            text-align: center;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: -0.6px;
        }
    }
`;

function Column( {number, title, description} ) {
    return (
        <Styledcolumn>
            <h1>{number}</h1>
            <h6>{title}</h6>
            <p>{description}</p>
        </Styledcolumn>
    )
}

export default Column
