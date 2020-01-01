import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import dice from "../assets/icons/dice.svg";
import noresult from "../assets/icons/null.svg";
import chaos from "../assets/icons/chaos.svg";
import pw from "../assets/icons/pw.svg";
import useKeyPress from '../hooks/useKeyPress';
import constants from '../constants';

const DicePanel = () => {
  const [view, setView] = useState();
  const [result, setResult] = useState();
  const {status, setStatus} = useContext(Context);

  useKeyPress(key => {
    if(key === 'Enter'){
      roll();
    }
  })

  const roll = () => {
    if(status===constants.SETTING_UP) return;
    let count = 0;
    let num = 1;

    const shuffle = setInterval(() => {
      setView(num === 1 ? chaos : num === 2 ? pw : noresult);
      count++;
      num++;
      if(num === 4) num = 1;
      if(count === 12){ 
          clearInterval(shuffle);
          const random = Math.floor(Math.random() * Math.floor(6)) + 1;
          setView(random === 1 ? chaos : random === 2 ? pw : noresult);
          setResult(random === 1 ? chaos : random === 2 ? pw : noresult);
        }
    }, 70);
  };

  useEffect(() => {
    if(result === pw) setStatus(constants.PLANESWALKING);
    if(result === chaos) setStatus(constants.CHAOS);
  }, [result])

  return (
    <div className={'dice-panel ' + (status===constants.SETTING_UP ? 'disabled' : '')}>
      <div onClick={roll} className="dice-container">
        <img src={dice} alt="" />
      </div>
      <div className="results-container">
        <img style={{width: view === chaos ? '60px' : view === pw ? '40px' : '50px'}} src={view} alt="" />
      </div>
    </div>
  );
};

export default DicePanel;
