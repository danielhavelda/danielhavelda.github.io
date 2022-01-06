import { useLayoutEffect, useEffect } from "react";

// Only use this if you want to prevent your IDE from 
// Warning: useLayoutEffect does nothing on the server
const canUseDOM = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;