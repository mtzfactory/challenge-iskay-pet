import {TextPropsWithoutRefAndOmit} from '~/toolbox';

export interface HeroProps extends TextPropsWithoutRefAndOmit<'children'> {
  text: string;
}
