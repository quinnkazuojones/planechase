import React, { createContext, useState, useEffect } from "react";
import { data } from "./assets/cards";
import { shuffle, make2dArray } from "./utils";
import constants from './constants';
import {useHistory, useLocation} from 'react-router-dom';

export const Context = createContext();

let cards = shuffle(data);

export const checkGrid = grid => {
  let newGrid = [...grid];

  grid.forEach((row, i) => {
    row.forEach((card, _i) => {
      if (
        (i === 0 && _i === 1) ||
        (i === 1 && _i === 0) ||
        (i === 1 && _i === 1) ||
        (i === 1 && _i === 2) ||
        (i === 2 && _i === 1)
      ) {
        if (!newGrid[i][_i]) {
          newGrid[i][_i] = getCard();
        }
      }
    });
  });
  return newGrid;
};

const getCard = () => {
  const card = cards[0];
  cards = cards.slice(1, cards.length);
  return card;
};

const ContextProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [grid, setGrid] = useState(make2dArray());
  const [current, setCurrent] = useState();
  const [status, setStatus] = useState(constants.SETTING_UP);
  const [started, setStarted] = useState(false);

  const history = useHistory();
  const {pathname} = useLocation();
  useEffect(() => {
    if(history){
      if((pathname !== '/' && !pathname.includes('/help'))  && !started) history.push('/');
    }
  }, [pathname]);

  useEffect(() => {
    setGrid(checkGrid(grid));
  }, []);

  useEffect(() => {
    if (grid) setCurrent(grid[1][1]);
  }, [grid]);

  return (
    <Context.Provider
      value={{
        started,
        setStarted,
        players,
        setPlayers,
        grid,
        setGrid,
        current,
        status,
        setStatus
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
