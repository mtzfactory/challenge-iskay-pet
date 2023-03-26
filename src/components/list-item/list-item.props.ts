import {ViewPropsWithoutRef} from '~/toolbox';

export interface ListItemProps extends ViewPropsWithoutRef {
  disabled?: boolean;
  description: string;
  title: string;
  onPress?: () => void;
}
