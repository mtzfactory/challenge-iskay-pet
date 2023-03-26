import type {Store} from '~/models';
import type {ViewPropsWithoutRefAndOmit} from '~/toolbox';

export interface StoresMapProps extends ViewPropsWithoutRefAndOmit<'children'> {
  stores: Store[];
  onStoreSelect: (store: Store, index: number) => void;
  onStoreDeselect: () => void;
}

export interface StoresMapHandle {
  selectStore: (store: Store) => void;
}
