import * as React from 'react';

import {StoresProvider} from './stores.provider';

export const withStoresProvider =
  (Component: React.ComponentType<any>) => (props: any) =>
    (
      <StoresProvider>
        <Component {...props} />
      </StoresProvider>
    );
