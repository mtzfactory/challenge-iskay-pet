import {Store} from '~/models';
import {ViewPropsWithoutRefAndOmit} from '~/toolbox';

export interface StoreListProps extends ViewPropsWithoutRefAndOmit<'children'> {
  stores: Store[];
}

export interface StoreListHandle {
  scrollToIndex: (index: number) => void;
}
