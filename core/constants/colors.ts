import { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

type ThemeStyles = {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;

  primary: string;
};

const commonColors = {
  primary: '#D61F26',
};

const colors: { [key: string]: ThemeStyles } = {
  common: commonColors as ThemeStyles,
  light: {
    ...commonColors,
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    ...commonColors,
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export default colors;

export const useColors = (colorScheme: ColorSchemeName): ThemeStyles => colors[colorScheme ?? 'light'];
