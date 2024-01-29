import React, { FC } from "react";
import styled from "@emotion/styled";
import { Cell as CellType, CellState, Coords } from "../../helpers/Field";

export interface CellProps {
  /**
   * Cell status based on CellState
   */
  children: CellType;
  /**
   * Cell coordinates
   */
  coords: Coords;
  /**
   * onClick by cell handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMenu by handler
   */
  onContextMenu: (coords: Coords) => void;
}

interface ComponentMapProps {
  children: CellType;
  onClick: (coords: Coords) => void;
  onContextMenu: (coords: Coords) => void;
};


export const Cell: FC<CellProps> = ({ children, coords, ...data }) => {
  const isActiveCell = [
    CellState.hidden,
    CellState.flag,
    CellState.weakFlag,
  ].includes(children);

  const onClick = () => {
    if(isActiveCell){
      return  data.onClick(coords);
    }
  }

  const onContextMenu = (elem: React.MouseEvent<HTMLElement>) => {
    /**
     * Prevent context menu by default
     */
    elem.preventDefault();
    if(isActiveCell) {
      return data.onContextMenu(coords);
    };
  };

  const props = {
    onClick,
    onContextMenu,
  };

  switch (children) {
    case CellState.empty:
      return <RevealedFrame {...props} />;
    case CellState.bomb:
      return (
        <BombFrame {...props}>
          <Bomb />
        </BombFrame>
      );
    case CellState.hidden:
      return <ClosedFrame {...props} />;
    case CellState.flag:
      return (
        <ClosedFrame {...props}>
          <Flag />;
        </ClosedFrame>
      );
    case CellState.weakFlag:
      return (
        <ClosedFrame {...props}>
          <WeakFlag />;
        </ClosedFrame>
      );
    default:
      return <RevealedFrame {...props}>{children}</RevealedFrame>;
  }
};


const ClosedFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d5d1d1;
  border: 0.6vh solid transparent;
  border-color: white #9e9e9e #9e9e9e white;
  &:hover {
    filter: brightness(1.1);
  }
`;

const transparent = "rgba(0, 0, 0, 0)";
const colors: { [key in CellType]: string } = {
  0: transparent,
  1: "#2a48ec",
  2: "#2bb13d",
  3: "#ec6561",
  4: "#233db7",
  5: "#a6070f",
  6: "#e400af",
  7: "#906a02",
  8: "#fa0707",
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};
const RevealedFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  &:hover {
    filter: brightness(1);
  }
`;

const BombFrame = styled(ClosedFrame)`
  background-color: #ec433c;
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 1vw;
  height: 1vw;
  background-color: #333;
`;

const Flag = styled.div`
  width: 0px;
  height: 0px;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
  border-left: 0.5vw solid #ec443c;
`;

const WeakFlag = styled(Flag)`
  border-left: 0.5vw solid #f19996;
`;


