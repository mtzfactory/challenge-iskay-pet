import * as React from 'react';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {StatusBar, TouchableWithoutFeedback, View} from 'react-native';

import {enhanceStyle} from '~/toolbox';

import {ModalSheetProps as Props} from './moda-sheet.props';
import {modalSheetStyles as styles} from './modal-sheet.styles';

const initialSnapPoints = ['CONTENT_HEIGHT'];

export const ModalSheet = (props: Props) => {
  const {
    children,
    visible,
    onDismiss,
    contentStyle: contentStyleOverrie,
    style,
  } = props;
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const contentStyle = enhanceStyle(styles.content, contentStyleOverrie);

  if (!visible) {
    return null;
  }

  function handleOnClose() {
    bottomSheetRef.current?.close();
    onDismiss?.();
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.overlay.backgroundColor}
      />
      <TouchableWithoutFeedback onPress={handleOnClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        contentHeight={animatedContentHeight}
        handleHeight={animatedHandleHeight}
        snapPoints={animatedSnapPoints}
        onClose={handleOnClose}
        backgroundStyle={style}>
        <BottomSheetView onLayout={handleContentLayout} style={contentStyle}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};
