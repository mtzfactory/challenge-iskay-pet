import {Store} from '~/models';
import {ViewPropsWithoutRefAndOmit} from '~/toolbox';

export interface StoreListProps extends ViewPropsWithoutRefAndOmit<'children'> {
  stores: Store[];
}
