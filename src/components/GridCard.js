import React from "react";
import {animated} from 'react-spring';

const GridCard = ({ styleProp, card, i, _i, planeswalk, planeswalking }) => {
  const src = card ? card.img : "back.png";

  const selectable = !planeswalking
    ? ""
    : (!card &&
        ((i === 0 && _i === 0) ||
          (i === 0 && _i === 2) ||
          (i === 2 && _i === 0) ||
          (i === 2 && _i === 2))) ||
      (i === 0 && _i === 1) ||
      (i === 1 && _i === 0) ||
      (i === 1 && _i === 2) ||
      (i === 2 && _i === 1)
    ? "selectable"
    : "not-selectable";

  return (
    <animated.div style={styleProp}
     onClick={() => planeswalk(i, _i)}
      className={`grid-card ${card ? "" : "no-border"} ${selectable}`}
    >
      <div className="img-container">
        <img className='main-image' src={require(`../assets/images/${src}`)} alt="" />
      </div>
      {card ? (
        <div className="name">
          <p>{card.name}</p>
        </div>
      ) : null}
    </animated.div>
  )
};

export default GridCard;
