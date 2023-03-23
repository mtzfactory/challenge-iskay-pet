import {ViewPropsWithoutRefAndOmit} from '~/toolbox';

export interface ListItemProps extends ViewPropsWithoutRefAndOmit<'children'> {
  title: string;
  description: string;
}
