import React from "react";
import ReactDOM from "react-dom";

import { Top } from "./components/Top";
import { Scoreboard } from "./components/Scoreboard";

// import App from '../examples/ReactIntro/App'
// import { Legend } from './components/Legend/Legend';

ReactDOM.render(
  <>
    <Top feature="Flag" firstAction="ctrl" secondAction="click">
      Minesweeper
    </Top>
    <Scoreboard
      levels={["begginer", "advanced", "expert"]}
      mines="0"
      onReset={() => {}}
      timer="010"
    />
  </>,
  document.getElementById("root")
);
