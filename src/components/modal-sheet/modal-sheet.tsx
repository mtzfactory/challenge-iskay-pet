import * as React from 'react';
import {
  BottomSheetView,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

import {enhanceStyle} from '~/toolbox';

import {
  ModalSheetProps as Props,
  ModalSheetHandle as Handle,
} from './moda-sheet.props';
import {modalSheetStyles as styles} from './modal-sheet.styles';
import {Overlay} from './overlay';

const initialSnapPoints = ['CONTENT_HEIGHT'];

const ForwardModalSheet: React.ForwardRefRenderFunction<Handle, Props> = (
  props,
  ref,
) => {
  const {
    children,
    visible,
    onDismiss,
    contentStyle: contentStyleOverrie,
    style,
  } = props;
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const contentStyle = enhanceStyle(styles.content, contentStyleOverrie);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        show() {
          bottomSheetRef.current?.expand();
        },
        dismiss() {
          bottomSheetRef.current?.dismiss();
        },
      };
    },
    [],
  );

  React.useEffect(
    function () {
      visible
        ? bottomSheetRef.current?.present()
        : bottomSheetRef.current?.dismiss();
    },
    [visible],
  );

  function handleOnDismiss() {
    onDismiss?.();
  }

  return (
    <>
      <Overlay visible={visible} onPress={handleOnDismiss} />
      <BottomSheetModal
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        enableDismissOnClose={true}
        snapPoints={animatedSnapPoints}
        contentHeight={animatedContentHeight}
        handleHeight={animatedHandleHeight}
        onDismiss={handleOnDismiss}
        backgroundStyle={style}>
        <BottomSheetView onLayout={handleContentLayout} style={contentStyle}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export const ModalSheet = React.forwardRef(ForwardModalSheet);

export const useModalSheetRef = (initialValue = null) =>
  React.useRef<Handle>(initialValue);
