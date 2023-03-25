import type {StyleProp, ViewStyle} from 'react-native';

export interface ModalSheetProps {
  children: React.ReactNode | React.ReactNode[];
  visible: boolean;
  onDismiss?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}
