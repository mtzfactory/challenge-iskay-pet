import * as React from 'react';

import fixtures from '~/test/fixtures';
import {fireEvent, render, screen} from '~/test/utils';
import type {Store} from '~/types';

import {StoreDetail} from './store-detail';

type OnPress = React.ComponentProps<typeof StoreDetail.Tasks>['onPress'];

const testStore: Store = fixtures.StoresList[0];

const DummyStoreDetail = ({
  store,
  onPress,
}: {
  store: Store;
  onPress: OnPress;
}) => (
  <StoreDetail name={store.name}>
    <StoreDetail.Item icon="map-pin" label={store.address.direction} />
    <StoreDetail.ShippingMethods methods={store.shipping_methods} />
    <StoreDetail.Tasks
      storeId={store.id}
      tasks={store.tasks}
      onPress={onPress}
    />
  </StoreDetail>
);

describe('StoreDetail', function () {
  it('Should render', function () {
    render(<DummyStoreDetail store={testStore} onPress={() => null} />);

    // StoreDeatil
    expect(screen.getByText(testStore.name)).toBeDefined();

    // StoreDetail.Item
    expect(screen.getByText(testStore.address.direction)).toBeDefined();

    // StoreDetail.ShippingMethods
    testStore.shipping_methods.forEach(shippingMethod => {
      expect(screen.getByText(shippingMethod.name)).toBeDefined();
      expect(screen.getByText(shippingMethod.description)).toBeDefined();
    });

    // StoresList.Tasks
    testStore.tasks.forEach(task => {
      expect(screen.getByText(task.description)).toBeDefined();
    });
    expect(screen.getAllByText('Assigned').length).toBe(
      testStore.tasks.filter(task => task.assigned).length,
    );
    expect(screen.getAllByText('Assign').length).toBe(
      testStore.tasks.filter(task => !task.assigned).length,
    );
  });

  it('Should let assign the task of the store', function () {
    const handleOnPress = jest.fn();
    const taskToAssign = testStore.tasks.filter(task => !task.assigned);

    render(<DummyStoreDetail store={testStore} onPress={handleOnPress} />);

    const assignButtons = screen.getAllByRole('button');

    expect(assignButtons.length).toBe(taskToAssign.length);

    assignButtons.forEach((button, index) => {
      fireEvent.press(button);
      expect(handleOnPress).toBeCalledWith(
        testStore.id,
        taskToAssign[index].id,
      );
    });
  });
});
