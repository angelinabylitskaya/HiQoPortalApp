import { ThemeManager } from 'react-native-ui-lib';
import './style';

ThemeManager.setComponentTheme('Text', (props, context) => {
  let buttonStyle = {};
  if (props.buttonMedium) {
    buttonStyle = {
      color: '#fff',
      uppercase: true,
    };
  }
  return {
    body: !props.buttonMedium,
    textPrimary: !props.buttonMedium,

    ...buttonStyle,
  };
});

ThemeManager.setComponentTheme('Button', (props, context) => {
  return {
    // this will apply a different backgroundColor
    // depending on whether the Button has an outline or not
    // backgroundColor: props.outline ? 'black' : 'green',

    paddingHorizontal: 24,
    backgroundColor: '#D61F26',
    borderRadius: 4,
  };
});
