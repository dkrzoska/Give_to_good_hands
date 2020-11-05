import React from 'react';
import styled from 'styled-components';
import decoration from "../../../assets/Decoration.svg";

const Styleddiv = styled.div`
    {
    height: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: ${props => props.fontsize};
        line-height: ${props => props.lineheight};
        display: inline-block;
    }
    img {
        height: 33px;
        justify-self: flex-end;
    }
    }
`;

function Divwithdecoration({ children, fontsize, lineheight }) {
    return (
        <Styleddiv fontsize= {fontsize} lineheight= {lineheight}>
            {children}
            <img src={decoration}></img>
        </Styleddiv>
    )
}

export default Divwithdecoration
