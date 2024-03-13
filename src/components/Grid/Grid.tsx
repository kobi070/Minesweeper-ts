import React, {FC} from "react";
import styled from "@emotion/styled";

import { Coords, Field } from "../../helpers/Field";
import { Cell } from "./Cell";

export interface GridProps {
    /**
     * Field Data
     */
    children: Field;
    /**
     * onClick handler
     */
    onClick: (coord: Coords) => void;
    /**
     * onContextMenu handler
     */
    onContextMenu: (coord: Coords) => void;
}

export const Grid: FC<GridProps> = ({children, ...rest}) => (
    <>{children.map((row, y) => row)}</>
);
