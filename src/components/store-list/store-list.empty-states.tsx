import * as React from 'react';
import {ActivityIndicator} from 'react-native';

import {EmptyState} from '~/components';
import {Icon} from '~/components/core';
import {theme} from '~/theme';

type OnPress = () => void;

export const stateIcon = {
  default: theme.colors.primary.green,
  error: theme.colors.primary.red,
  size: 68,
};

export const ErrorState = ({
  label,
  onPress,
}: {
  label: string;
  onPress: OnPress;
}) => (
  <EmptyState label="Query Again" text={label} onPress={onPress}>
    <Icon name="alert-triangle" size={stateIcon.size} color={stateIcon.error} />
  </EmptyState>
);

export const EmptyList = ({onPress}: {onPress: OnPress}) => (
  <EmptyState label="Query Again" text="You are all done!" onPress={onPress}>
    <Icon name="coffee" size={stateIcon.size} color={stateIcon.default} />
  </EmptyState>
);

export const LoadingState = () => (
  <EmptyState text="Loading Stores">
    <ActivityIndicator
      color={theme.colors.primary.blue}
      size="large"
      style={{marginBottom: theme.spacing.large}}
    />
  </EmptyState>
);
