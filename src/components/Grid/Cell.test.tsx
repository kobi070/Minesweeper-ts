import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { CellState, Coords } from "../../helpers/Field";

import { Cell, isActiveCell } from "./Cell";

describe( "Cell component check", () => {
    const coords: Coords = [1,1];

    for(let cell = CellState.empty; cell <= CellState.weakFlag; cell++){
        it("Check preven default contextMenu for every type of cell", () => {
            const props = {
                coords,
                onclick: jest.fn(),
                onContextMenue: jest.fn(),
            };
        });
        
        
        it("onClick and onContextMenu handler should be called for active cells", () => {});
    } 
} );