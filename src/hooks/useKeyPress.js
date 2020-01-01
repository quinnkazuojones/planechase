import { useState, useEffect } from "react";

const useKeyPress = callback => {
  const [keyPressed, setKeyPressed] = useState();

  useEffect(() => {
    const downHandler = ({ code }) => {
      if (keyPressed !== code) {
        setKeyPressed(code);
        callback && callback(code);
      }
    };

    const upHandler = () => {
      setKeyPressed(null);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
