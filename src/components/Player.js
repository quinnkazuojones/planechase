import React, { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";
import constants from "../constants";
import useMultiKeyPress from "../hooks/useMultiKeyPress";


const Player = ({ health, name, players, setPlayers, styleProp, status, num }) => {
  //particles
  const [pluses, setPluses] = useState([]);

  useMultiKeyPress(keys => {
    if(status===constants.SETTING_UP) return;

    const pattern = /Digit/;
    if (keys.some(key => pattern.test(key))) {
      const playerNum = keys.find(key => pattern.test(key)).substr(5) - 1;
      if(playerNum === num)
      if (keys.includes("Equal")) {
        incrementHealth();
      } else if (keys.includes("Minus")) {
        decrementHealth();
      }
    }
  });

  const plusTransition = useTransition(pluses, (particle, i) => i, {
    from: {
      color: "#f0ead6",
      zIndex: "9999",
      position: "absolute",
      opacity: 1,
      bottom: "40px",
      left: "135px",
      paddingLeft: Math.floor(Math.random() * 30)
    },
    enter: { opacity: 0, bottom: "80px" },
    config: config.molasses
  });

  const addPlus = () => {
    let newPluses = [...pluses, "+1"];
    setPluses(newPluses);
  };

  const [minuses, setMinuses] = useState([]);

  const minusTransition = useTransition(minuses, (particle, i) => i, {
    from: {
      color: "#f0ead6",
      zIndex: "9999",
      position: "absolute",
      opacity: 1,
      bottom: "40px",
      left: '20px',
      paddingLeft: Math.floor(Math.random() * 30)
    },
    enter: { opacity: 0, bottom: "80px" },
    config: config.molasses
  });

  const addMinus = () => {
    let newMinuses = [...minuses, "-1"];
    setMinuses(newMinuses);
  };

  useEffect(() => {
    if (pluses.length === 5) {
      setPluses([]);
    }
    if (minuses.length === 1) {
      setMinuses([]);
    }
  });

  //End of particles

  const decrementHealth = () => {
    if (status === constants.SETTING_UP) return;
    //particles
    addMinus();
    //end of particles
    let newPlayers = [...players];
    newPlayers.forEach(player => {
      if (player.name === name) player.health--;
    });
    setPlayers(newPlayers);
  };

  const incrementHealth = () => {
    if (status === constants.SETTING_UP) return;
    //particles
    addPlus();
    //end of particles
    let newPlayers = [...players];
    newPlayers.forEach(player => {
      if (player.name === name) player.health++;
    });
    setPlayers(newPlayers);
  };

  return (
    <animated.div style={{position:'relative', ...styleProp}} className="player">
      <p className="name">{name}</p>
              {/* particles */}
              {plusTransition.map(({ props, item, key }) => (
          <animated.div key={key} style={props}>
            {item}
          </animated.div>
        ))}
        {minusTransition.map(({ props, item, key }) => (
          <animated.div key={key} style={props}>
            {item}
          </animated.div>
        ))}
        {/* particles */}
      <div
        className={
          "health-container " +
          (status === constants.SETTING_UP ? "disabled" : "")
        }
      >
        <button onClick={decrementHealth}>-</button>
        <div className="health">
          <p>{health}</p>
        </div>
        <button onClick={incrementHealth}>+</button>
      </div>
    </animated.div>
  );
};

export default Player;
