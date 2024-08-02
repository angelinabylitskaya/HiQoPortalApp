import { Typography, Colors } from 'react-native-ui-lib';

Colors.loadColors({
  brand: '#D61F26',
  brandDark: '#000',
  brandLight: '#fff',
  brandSecondary: '#B2B2B2',
  // text
  textPrimary: '#1C1C1C',
  textLight: '#000',
  textDark: '#fff',
  // neutral
  neutral50: '#f2f2f2',
  neutral100: '#dbdbdb',
  neutral200: '#cacaca',
  neutral300: '#b2b2b2',
  neutral400: '#a3a3a3',
  neutral500: '#8c8c8c',
  neutral600: '#7f7f7f',
  neutral700: '#636363',
  neutral800: '#4d4d4d',
  neutral900: '#3B3B3B',
});

Typography.loadTypographies({
  h1: { fontFamily: 'EtelkaMedium', fontSize: 38, lineHeight: 46, letterSpacing: -0.3 },
  h2: { fontFamily: 'EtelkaText', fontSize: 30, lineHeight: 40, letterSpacing: -0.5 },
  h3: { fontFamily: 'EtelkaMedium', fontSize: 26, lineHeight: 32, letterSpacing: 0 },
  h4: { fontFamily: 'EtelkaText', fontSize: 24, lineHeight: 28, letterSpacing: 0 },
  h5: { fontFamily: 'EtelkaText', fontSize: 20, lineHeight: 26, letterSpacing: 0 },
  h5Medium: { fontFamily: 'EtelkaMedium', fontSize: 20, lineHeight: 26, letterSpacing: 0 },
  h6: { fontFamily: 'EtelkaText', fontSize: 18, lineHeight: 24, letterSpacing: 0 },
  subtitle1: { fontFamily: 'EtelkaText', fontSize: 16, lineHeight: 22, letterSpacing: 0 },
  subtitle2: { fontFamily: 'EtelkaText', fontSize: 15, lineHeight: 24, letterSpacing: 0 },
  body: { fontFamily: 'EtelkaText', fontSize: 18, lineHeight: 24, letterSpacing: 0 },
  body2: { fontFamily: 'EtelkaText', fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  bodyMedium: { fontFamily: 'EtelkaMedium', fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  caption: { fontFamily: 'EtelkaText', fontSize: 13, lineHeight: 16, letterSpacing: 0 },
  inputText: { fontFamily: 'EtelkaText', fontSize: 16, lineHeight: 20, letterSpacing: 0.15 },
  inputLabel: { fontFamily: 'EtelkaText', fontSize: 13, lineHeight: 16, letterSpacing: 0.15 },
  helperText: { fontFamily: 'EtelkaText', fontSize: 12, lineHeight: 14, letterSpacing: 0.4 },
  buttonLarge: { fontFamily: 'EtelkaMedium', fontSize: 15, lineHeight: 20, letterSpacing: 0.7 },
  buttonMedium: { fontFamily: 'EtelkaMedium', fontSize: 14, lineHeight: 20, letterSpacing: 0.7 },
  buttonSmall: { fontFamily: 'EtelkaMedium', fontSize: 13, lineHeight: 20, letterSpacing: 0.7 },
});
