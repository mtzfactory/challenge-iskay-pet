import * as React from 'react';
import {renderHook} from '@testing-library/react-hooks';

import {contextFactory} from './context-factory';

interface TestCtx {
  value: number;
}

describe('context-factory', () => {
  it('should exist', () => {
    expect(contextFactory).toBeDefined();
  });

  it('should return the context and the custom hook', () => {
    const [TestContext, useTestContext] = contextFactory<TestCtx>();

    expect(TestContext).toBeTruthy();
    expect(TestContext.Provider).toBeTruthy();

    expect(useTestContext).toBeTruthy();
    expect(useTestContext).toEqual(expect.any(Function));
  });

  it('use context hook should thrown an error if not used inside a provider', function () {
    const [_, useTestContext] = contextFactory<TestCtx>();

    const {result} = renderHook(() => useTestContext());

    expect(result.error?.message).toBe(
      'useContext must be used inside of a Provider with a value.',
    );
  });

  it('use context hook should return the context values', function () {
    const [TestContext, useTestContext] = contextFactory<TestCtx>();
    const wrapper = ({children}: {children: React.ReactElement}) => (
      <TestContext.Provider value={{value: 1}}>{children}</TestContext.Provider>
    );
    const {result} = renderHook(() => useTestContext(), {wrapper});

    expect(result.error?.message).toBeUndefined();
    expect(result.current).toEqual({value: 1});
  });
});
