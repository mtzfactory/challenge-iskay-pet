import * as React from 'react';

import fixtures from '~/test/fixtures';
import {fireEvent, render, screen} from '~/test/utils';
import type {Store} from '~/types';

import {StoreList} from './store-list';

const testStores: Store[] = fixtures.StoresList;

describe('StoreList', function () {
  it('Should render the store list', function () {
    render(
      <StoreList
        stores={testStores}
        onPress={() => null}
        onRefresh={() => null}
      />,
    );

    testStores.forEach(store => {
      expect(screen.getByText(store.name)).toBeDefined();
      expect(screen.getByText(store.address.direction)).toBeDefined();
      expect(
        screen.getByText(
          `${store.tasks.filter(task => !task.assigned).length} TASK`,
        ),
      ).toBeDefined();
    });
  });

  describe('With loading state', function () {
    beforeEach(function () {
      render(
        <StoreList
          loading
          stores={[]}
          onPress={() => null}
          onRefresh={() => null}
        />,
      );
    });

    it('Should render', function () {
      expect(screen.getByText('Loading Stores')).toBeDefined();
    });

    it("Shouldn't allow the user to query stores again", function () {
      expect(screen.queryAllByRole('button').length).toBe(0);
    });
  });

  describe('With error state', function () {
    const handleOnRefresh = jest.fn();

    beforeEach(function () {
      render(
        <StoreList
          error="Network Error"
          stores={[]}
          onPress={() => null}
          onRefresh={handleOnRefresh}
        />,
      );
    });

    afterEach(function () {
      handleOnRefresh.mockReset();
    });

    it('Should render', function () {
      expect(screen.getByText('Network Error')).toBeDefined();
    });

    it('Should let the user to query stores again', function () {
      fireEvent.press(screen.getByRole('button'));

      expect(handleOnRefresh).toHaveBeenCalled();
    });
  });

  describe('With empty state', function () {
    const handleOnRefresh = jest.fn();

    beforeEach(function () {
      render(
        <StoreList
          stores={[]}
          onPress={() => null}
          onRefresh={handleOnRefresh}
        />,
      );
    });

    afterEach(function () {
      handleOnRefresh.mockReset();
    });

    it('Should render', function () {
      expect(screen.getByText('You are all done!')).toBeDefined();
    });

    it('Should let the user to query stores again', function () {
      fireEvent.press(screen.getByRole('button'));

      expect(handleOnRefresh).toHaveBeenCalled();
    });
  });

  it('Should allow the user select a store', function () {
    const handleOnPress = jest.fn();

    render(
      <StoreList
        stores={testStores}
        onPress={handleOnPress}
        onRefresh={() => null}
      />,
    );

    testStores.forEach((store, index) => {
      fireEvent.press(screen.getByText(store.name));

      expect(handleOnPress).toHaveBeenCalledWith(store, index);
    });
  });
});
