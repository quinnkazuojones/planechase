import React, { useContext } from "react";
import { Context, checkGrid } from "../Context";
import GridCard from "./GridCard";
import { make2dArray } from "../utils";
import {useTransition} from 'react-spring';

const GridView = ({history}) => {
  const { grid, setGrid, status } = useContext(Context);

  const transition = useTransition(grid, (item, i) => i, {
    from: {transform: 'scale(0)'},
    enter: {transform: 'scale(1)'},
    leave: {transform: 'scale(0)'},
    trail: 80
  })

  const planeswalk = (i, _i) => {
    let newGrid = make2dArray();
    let a = 1 - i;
    let b = 1 - _i;
    grid.forEach((row, i) => {
      row.forEach((card, _i) => {
        let x = i + a;
        let y = _i + b;
        if (card && x < 3 && x > -1 && y < 3 && y > -1) newGrid[x][y] = card;
      });
    });
    setGrid(checkGrid(newGrid));
    history.push('/info')
  };

  const mappedCards = grid
    ? transition.map(({item, props, key}, i) =>
        item.map((card, _i) => (
          <GridCard key={key} styleProp={props} planeswalk={planeswalk} i={i} _i={_i} card={card} planeswalking={status==='Planeswalking...' ? true : false}/>
        ))
      )
    : null;

  return <div id='grid' className="grid-container">{mappedCards}</div>;
};

export default GridView;
