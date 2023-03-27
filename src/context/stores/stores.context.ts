import {contextFactory} from '~/toolbox';

import type {StoresContextProps} from './stores.types';

export const [StoresContext, useStoresContext] =
  contextFactory<StoresContextProps>();
