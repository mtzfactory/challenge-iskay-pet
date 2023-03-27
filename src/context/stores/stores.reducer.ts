import {Store} from '~/types';

import {StoresContextActions, StoresState} from './stores.types';

export const initialState: StoresState = {
  error: null,
  loading: false,
  selectedStore: null,
  stores: [],
};

function updateStore(stores: Store[], storeId: string, taskId: string) {
  const storeToUpdate = stores.find(store => store.id === storeId);

  if (!storeToUpdate) {
    return stores;
  }

  const taskToUpdate = storeToUpdate?.tasks.find(task => task.id === taskId);

  const updatedStore = {
    ...storeToUpdate,
    tasks: [...storeToUpdate.tasks, {...taskToUpdate, assigned: true}],
  };

  return {...stores, updatedStore};
}

export function storesReducer(
  state: StoresState,
  action: StoresContextActions,
): StoresState {
  switch (action.type) {
    case 'ERROR':
      return {
        error: action.payload,
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
