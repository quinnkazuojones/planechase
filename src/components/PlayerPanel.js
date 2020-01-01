import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import Player from "./Player";
import useMeasure from "../hooks/useMeasure";
import { animated, useSpring, config, useTransition } from "react-spring";

const PlayerPanel = () => {
  const { players, setPlayers, status } = useContext(Context);
  const [bind, { height }] = useMeasure();


  const animation = useSpring({ height: height + 100, config: config.default });
  const transition = useTransition(players, (player, i) => i, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    levae: { opacity: 0 }
  });

  const mappedPlayers = players
    ? transition.map(({ props, key, item }) => (
        <Player
          status={status}
          styleProp={props}
          key={key}
          players={players}
          setPlayers={setPlayers}
          health={item.health}
          name={item.name}
          num = {key}
        />
      ))
    : null;

  return (
    <animated.div style={animation} className="player-panel">
      <div className="header">
        <h1>Players</h1>
      </div>
      <div {...bind} className="player-container">
        {players.length > 0 ? (
          mappedPlayers
        ) : (
          <p className="no-players">Add players...</p>
        )}
      </div>
    </animated.div>
  );
};

export default PlayerPanel;
