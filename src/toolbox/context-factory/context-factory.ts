import {createContext, useContext} from 'react';

export function contextFactory<Context extends unknown | null>() {
  const ctx = createContext<Context | undefined>(undefined);
  const useCtx = () => {
    const context = useContext(ctx);
    if (!context) {
      throw new Error(
        'useContext must be used inside of a Provider with a value.',
      );
    }
    return context;
  };

  return [ctx, useCtx] as const;
}
