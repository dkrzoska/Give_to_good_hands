import React from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import people from '../../../assets/People.jpg';
import signature from '../../../assets/Signature.svg';

const Styledaboutus = styled.div`
    {
        display: flex;
        font-size: 30px;
        line-height: 54px;
        margin: 80px 0 70px 0;
        .leftdiv {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-top: 180px;
            padding: 0 150px 40px 150px;
            .description {
                text-align:center;
                margin-bottom: 40px;
            }
            .signature {
                align-self: flex-end;
            }
        }
        .rightdiv {
            height: 935px;
            width: 50%;
            background: url(${people});
        }
    }
`

function Aboutus() {
    return (
        <Styledaboutus id='aboutus'>
            <div className='leftdiv'>
                <Divwithdecoration fontsize='38px' lineheight='55px'>
                    <p> O nas</p>
                </Divwithdecoration>
                    <p className='description'>
                        Nori grape silver beet broccoli kombu beet
                        greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek
                        lentil turnip greens parsnip.
                    </p>
                    <img className='signature' src={signature} alt='signature'/>
            </div>
            <div className='rightdiv'></div>
        </Styledaboutus>
    )
}

export default Aboutus
