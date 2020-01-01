import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import logo from "../assets/icons/logo.svg";
import {animated, useSpring, config} from 'react-spring';
import {useHistory} from 'react-router-dom';

const InitView = () => {
  const history = useHistory();
  const { players, setPlayers, setStatus, started, setStarted } = useContext(Context);
  const [player, setPlayer] = useState();
  if(started) history.push('/info')

  const addPlayer = e => {
    e.preventDefault();
    if(player !== '' && !players.some(({name}) => name === player)) {
      setPlayers([...players, { name: player, health: 20 }]);
    }
    else alert('Empty/Duplicate name not allowed');
    setPlayer("");
  };

  const startGame = () => {
    if(players.length  > 0) {
      setStatus(null);
      setStarted(true);
    }
    else alert('need players');
  };
  
  const animation = useSpring({from:{opacity: 0}, opacity: 1, config: config.molasses})

  return (
    <animated.div style={animation} className="init-view">
      <img src={logo} alt="" />
      <form onSubmit={addPlayer}>
        <input
          value={player}
          onChange={e => setPlayer(e.target.value)}
          type="text"
          placeholder="Add player..."
          onFocus={e => e.target.placeholder = ''}
          onBlur={e => e.target.placeholder = 'Add player...'}
        />
        <button type="button" onClick={startGame}>
          Start Game
        </button>
      </form>
    </animated.div>
  );
};

export default InitView;
