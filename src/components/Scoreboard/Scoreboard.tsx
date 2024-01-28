import React, { FC } from "react";
import styled from "@emotion/styled";

import { Counter } from "./Counter";
import { Level } from "./Level";
import { Reset } from "./Reset";

export interface ScoreboardProps {
  /**
   * The amount of time you are playing the game
   */
  timer: string;
  /**
   * Possible game toughness (how hard is the game)
   */
  levels: string[];
  /**
   * Action handler to reset the game state
   */
  onReset: () => void;
  /**
   * Bombs on the field
   */
  mines: string;
}

export const Scoreboard: FC<ScoreboardProps> = ({
  timer,
  levels,
  onReset,
  mines,
}) => {
  return (
    <ScoreboardWrapper>
      <Counter children={timer} />
      <Level children={levels} />
      <Reset onReset={onReset} />
      <Counter children={mines} />
    </ScoreboardWrapper>
  );
};

const ScoreboardWrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`;
