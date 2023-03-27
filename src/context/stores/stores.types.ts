import {Nullable} from '~/toolbox';
import {Store} from '~/types';

export type ErrorObject = {
  message: string;
  code: string;
};

type SelectedStore = Nullable<{
  store: Store;
  index: number;
}>;

export interface StoresState {
  error: ErrorObject | null;
  loading: boolean;
  selectedStore: SelectedStore;
  stores: Store[];
}

export interface StoresContextProps extends StoresState {
  assignStoreTask: (storeId: string, taskId: string) => void;
  clearSelectedStore: () => void;
  requestingStores: () => void;
  selectStore: (store: Store, index: number) => void;
  setError: (error: ErrorObject) => void;
  setStores: (stores: Store[]) => void;
}

type UpdateStorePayload = {storeId: string; taskId: string};

export type StoresContextActions =
  | {type: 'ERROR'; payload: ErrorObject}
  | {type: 'REQUESTING_STORES'}
  | {type: 'SELECT_STORE'; payload: SelectedStore}
  | {type: 'SET_STORES'; paylaod: Store[]}
  | {type: 'UPDATE_STORE'; payload: UpdateStorePayload};

export type Dispatch = (action: StoresContextActions) => void;
