import React, {FC} from "react";
import styled from "@emotion/styled";

export const Legend : FC = () : any => {
    <Parent>
        <strong>Flag: </strong>
        <Key>ctrl</Key> + <Click>Click</Click>
    </Parent>
};

export const Parent = styled.legend`
    font-size: 1em;
    margin: 0 auto 2vw;
    line-height: 1.25em;
`

const Key = styled.span`
    color: #ec433c;
`;

const Click = styled.span`
    color: blue;
`;

