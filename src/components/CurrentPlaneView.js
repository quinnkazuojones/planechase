import React, { useContext } from "react";
import { Context } from "../Context";
import {useSpring, animated, config} from 'react-spring';

const CurrentPlaneView = () => {
  const { current, started } = useContext(Context);
  const { img, oracle_text, name, type_line } = current;

  const fadeIn = useSpring({from: {opacity: 0}, opacity: 1, config: config.default});
  const slideIn = useSpring({from: {opacity: 0, transform: 'translate3d(80px, 0, 0)'}, to:{ opacity: 1, transform: 'translate3d(0,0,0)'}, config: config.molasses, delay: 250 });

  return current ? (
    <div className="current">
      <animated.img style={fadeIn} src={require(`../assets/images/${img}`)} alt="" />
      <animated.div style={slideIn} className="content">
        <div>
          <p>{oracle_text}</p>
          <h1>{name}</h1>
          <h2>{type_line}</h2>
        </div>
      </animated.div>
    </div>
  ) : null;
};

export default CurrentPlaneView;
