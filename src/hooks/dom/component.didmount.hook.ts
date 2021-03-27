import { useEffect } from 'react';

/**
 * @function useDidMount Hooks did mount life-cycle method.
 * @param callback Function that is going to be called.
 */
function useDidMount(callback: () => void): void {
  useEffect(() => {
    callback();
  }, []);
}

export default useDidMount;