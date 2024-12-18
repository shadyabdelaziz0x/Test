import {StyleProp} from 'react-native';
import {ImageStyle, Source} from 'react-native-fast-image';

export interface ProgressImageProps {
  style?: StyleProp<ImageStyle>;
  src?: string;
  placeholder?: Source;
}
