import produce from 'immer';

import {Store} from '~/types';

import {ErrorObject, StoresContextActions, StoresState} from './stores.types';

export const initialState: StoresState = {
  error: null,
  loading: false,
  selectedStore: null,
  stores: [],
};

function updateStore(stores: Store[], storeId: string, taskId: string) {
  const storeToUpdateIndex = stores.findIndex(store => store.id === storeId);

  if (storeToUpdateIndex < 0) {
    return stores;
  }

  const taskToUpdateIndex = stores[storeToUpdateIndex].tasks.findIndex(
    task => task.id === taskId,
  );

  const nextStores = produce(stores, draftStores => {
    draftStores[storeToUpdateIndex].tasks[taskToUpdateIndex].assigned = true;
  });

  return nextStores;
}

const errorToString = (error: ErrorObject) =>
  `${error.message} (${error.code})`;

function createError(error: ErrorObject) {
  return {
    ...error,
    toString: () => errorToString(error),
  };
}

export function storesReducer(
  state: StoresState,
  action: StoresContextActions,
): StoresState {
  switch (action.type) {
    case 'ERROR':
      return {
        error: createError(action.payload),
        loading: false,
        selectedStore: null,
        stores: [],
      };
    case 'REQUESTING_STORES':
      return {
        error: null,
        loading: true,
        selectedStore: null,
        stores: [],
      };
    case 'SELECT_STORE':
      return {
        ...state,
        selectedStore: action.payload,
      };
    case 'SET_STORES':
      return {
        error: null,
        loading: false,
        selectedStore: null,
        stores: action.paylaod,
      };
    case 'UPDATE_STORE':
      return {
        ...state,
        stores: updateStore(
          state.stores,
          action.payload.storeId,
          action.payload.taskId,
        ),
      };
    default:
      return state;
  }
}
