import React from "react";
import DicePanel from "./DicePanel";
import PlayerPanel from "./PlayerPanel";
import StatusView from "./StatusView";
import {animated, useSpring, config} from 'react-spring';

const InfoPanel = () => {
  const animation = useSpring({from:{opacity: 0}, opacity: 1, config: config.molasses})

  return (
    <animated.div style={animation} className="info-panel">
      <div>
        <PlayerPanel />
        <DicePanel />
      </div>
      <StatusView />
    </animated.div>
  );
};

export default InfoPanel;
