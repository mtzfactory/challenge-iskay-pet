import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {composeStyle, theme} from '~/theme';

interface Props {
  visible: boolean;
  onPress: () => void;
}

export const Overlay = ({visible, onPress}: Props) =>
  visible ? (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.overlay.backgroundColor}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
    </>
  ) : null;

const styles = StyleSheet.create({
  overlay: composeStyle(
    {
      backgroundColor: theme.colors.translucent(0.35),
    },
    'absoluteFill',
  ),
});
