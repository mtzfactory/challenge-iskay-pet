import {Store} from '~/models';
import {ViewPropsWithoutRefAndOmit} from '~/toolbox';

export interface StoreListProps extends ViewPropsWithoutRefAndOmit<'children'> {
  stores: Store[];
  onPress: (store: Store, index: number) => void;
}

export interface StoreListHandle {
  scrollToIndex: (index: number) => void;
}
