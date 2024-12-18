import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
import {ProgressImageProps} from './types';

const ProgressImageComponent = createImageProgress(FastImage);

const ProgressImage = ({style, src}: ProgressImageProps) => {
  const source = useMemo(
    () => ({
      uri: src,
    }),
    [src],
  );

  return <ProgressImageComponent style={style} source={source} />;
};

export default ProgressImage;
