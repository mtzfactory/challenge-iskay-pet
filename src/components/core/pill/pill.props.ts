import {StyleProp} from 'react-native';
import type {TextStyle} from 'react-native';

import {ViewPropsWithoutRefAndOmit} from '~/toolbox';

import type {PillVariants} from './pill.variants';

export interface PillProps extends ViewPropsWithoutRefAndOmit<'children'> {
  label: string;
  variant?: PillVariants;
  labelStyle?: StyleProp<TextStyle>;
}
