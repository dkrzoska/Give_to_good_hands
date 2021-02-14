import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Styleddiv = styled.div`
    {
        display: flex;
        justify-content: center;
        width: 1616px;
        margin: 0 auto;
        margin-top: 270px;
        .copyright {
            font-size: 18px;
            line-height: 24px;
            margin-rigt: auto;
            margin-left: auto;
        }
        .social-icons {
            font-size: 30px;
            margin-left: auto;
            margin-right: 10px;
        }
    }
`

function Footer() {
    return (
        <Styleddiv>
            <p className='copyright'>Copyright by Coders Lab</p>
            <p className='social-icons'>
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagram} />
            </p>
        </Styleddiv>
    )
}

export default Footer
