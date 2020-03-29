//from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import React, { useEffect, useRef, useReducer } from "react";

const useInterval = (callBack, delay) => {
  const savedCallBack = useRef();

  useEffect(() => {
    savedCallBack.current = callBack;
  }, [callBack]);

  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
