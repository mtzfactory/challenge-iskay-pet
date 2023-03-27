import type {ViewPropsWithoutRefAndOmit} from '~/toolbox';
import type {Store} from '~/types';

export interface StoreListProps extends ViewPropsWithoutRefAndOmit<'children'> {
  stores: Store[];
  onPress: (store: Store, index: number) => void;
}

export interface StoreListHandle {
  scrollToIndex: (index: number) => void;
}
