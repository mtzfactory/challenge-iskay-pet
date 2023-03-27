import type {ViewPropsWithoutRefAndOmit} from '~/toolbox';
import type {Store} from '~/types';

export interface StoreListProps extends ViewPropsWithoutRefAndOmit<'children'> {
  loading?: boolean;
  error?: string;
  stores: Store[];
  onPress: (store: Store, index: number) => void;
  onRefresh: () => void;
}

export interface StoreListHandle {
  scrollToIndex: (index: number) => void;
}
