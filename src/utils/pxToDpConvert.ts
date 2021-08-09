import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
// import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

// const {width: SCREEN_WIDTH} = Dimensions.get('window');

//const scale = SCREEN_WIDTH / 375;

export function normalize(size:number) {
  // const newSize = size * scale;
  // return Math.round(PixelRatio.roundToNearestPixel(newSize));
  return RFValue(size, 812);
}
export const heightConverter = (px:number) => {
  const percentageHeight = (px / 812) * 100;
  return heightPercentageToDP(percentageHeight);
};
export const widthConverter = (px:number) => {
  const percentageWidth = (px / 375) * 100;
  return widthPercentageToDP(percentageWidth);
};
