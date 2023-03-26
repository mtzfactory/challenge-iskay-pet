import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const withGestureHandlerProvider =
  (Component: React.ComponentType<any>) =>
  (props: any = {}) =>
    (
      /* eslint-disable-next-line react-native/no-inline-styles */
      <GestureHandlerRootView style={{flex: 1}}>
        <Component {...props} />
      </GestureHandlerRootView>
    );
