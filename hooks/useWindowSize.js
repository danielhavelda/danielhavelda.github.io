import { useState, useEffect } from 'react';
import debounce from '../lib/debounce';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';

function useWindowSize(debounceMs) {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', debounce(updateSize, debounceMs));
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

export default useWindowSize;