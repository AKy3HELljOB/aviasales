import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    console.log(delay)
    if (delay != null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      }
    }
  }, [callback, delay])
} 
