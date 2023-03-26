import * as React from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const withModalProvider =
  (Component: React.ComponentType<any>) =>
  (props: any = {}) =>
    (
      <BottomSheetModalProvider>
        <Component {...props} />
      </BottomSheetModalProvider>
    );
