import * as React from 'react';

import {initialState, storesReducer} from './stores.reducer';
import {Children} from '~/toolbox';

import {StoresContext} from './stores.context';
import {StoresContextProps} from './stores.types';

interface Props {
  children: Children;
}

export const StoresProvider = ({children}: Props) => {
  const [state, dispatch] = React.useReducer(storesReducer, initialState);

  const assignStoreTask: StoresContextProps['assignStoreTask'] = (
    storeId,
    taskId,
  ) => dispatch({type: 'UPDATE_STORE', payload: {storeId, taskId}});

  const clearSelectedStore = () =>
    dispatch({type: 'SELECT_STORE', payload: null});

  const requestingStores = () => dispatch({type: 'REQUESTING_STORES'});

  const selectStore: StoresContextProps['selectStore'] = (store, index) =>
    dispatch({type: 'SELECT_STORE', payload: {store, index}});

  const setError: StoresContextProps['setError'] = error =>
    dispatch({type: 'ERROR', payload: error});

  const setStores: StoresContextProps['setStores'] = stores =>
    dispatch({type: 'SET_STORES', paylaod: stores});

  return (
    <StoresContext.Provider
      value={{
        ...state,
        assignStoreTask,
        clearSelectedStore,
        requestingStores,
        selectStore,
        setError,
        setStores,
      }}>
      {children}
    </StoresContext.Provider>
  );
};
