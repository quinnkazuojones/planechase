import { useState, useEffect } from "react";

const useMultiKeyPress = callback => {
  const [keys, set] = useState([]);

  useEffect(() => {
    callback && callback(keys);
  }, [keys]);

  useEffect(() => {
    const downHandler = ({code}) => {
      if (!keys.includes(code)) {
        const newKeys = [...keys, code];
        set(newKeys);
      }
    };

    const upHandler = ({ code }) => {
      const newKeys = keys.filter(key => key !== code);
      set(newKeys);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keys;
};

export default useMultiKeyPress;
