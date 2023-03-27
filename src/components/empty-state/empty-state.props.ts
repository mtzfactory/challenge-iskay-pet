import {ViewPropsWithoutRef} from '~/toolbox';

export type EmptyStateProps = ViewPropsWithoutRef & {
  text: string;
} & (
    | {
        label?: never;
        onPress?: never;
      }
    | {
        label: string;
        onPress: () => void;
      }
  );
