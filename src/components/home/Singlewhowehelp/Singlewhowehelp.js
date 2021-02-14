import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';

const Styleddiv = styled.div`
    {
        display: flex;
        justify-content: space-between;
        height: 81px;
        margin: 0 auto 34px;
        border-bottom: solid 0.75px ${colors.color_gray};
        .organization {
            h6 {
                font: 300 26px/31px Merriweather;
            }
            .goal-and-mission {
                font: 300 18px/22px Merriweather;
            }
        }
        .items {
            font: 300 18px/22px Merriweather;
            margin: 15px 37px 0 0;
        }
    }

`

function Singlewhowehelp({ title, mission, items }) {
    return (
        <Styleddiv>
            <div className='organization'>
                <h6 className='organization-name'>{title}</h6>
                <p className='goal-and-mission'>{mission}</p>
            </div>
            <p className='items'>{items}</p>
        </Styleddiv>
    )
}

export default Singlewhowehelp
