import React from 'react';
import styled from 'styled-components';
import Column from '../Column/Column';
// import { colors } from '../../settings/settings';
import background from '../../../assets/3-Columns-Background.png';

const Styledthreecolumns = styled.div`
    {
        display: flex;
        justify-content: space-around;
        background: url(${background});
        margin: 0 0 55px 0;
        padding: 46px 0 86px 0;
    }
`;

function Threecolumns() {
    return (
        <Styledthreecolumns>
            <Column
                number='10'
                title='oddanych worków'
                description='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
            />
            <Column
                number='5'
                title='wspartych organizacji'
                description='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
            />
            <Column
                number='7'
                title='zorganizowanych zbiórek'
                description='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
            />
        </Styledthreecolumns>
    )
}

export default Threecolumns