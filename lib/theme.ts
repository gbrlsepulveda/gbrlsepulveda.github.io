import {rem} from 'polished';
import {createGlobalStyle} from 'styled-components';

export const Colors = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',

  primary: '#16a085',
};

export const FontFamily = `'Open Sans', sans-serif`;

export const FontSizes = {
  small: rem(18),
  medium: rem(24),
  large: rem(36),
  xLarge: rem(72),
};

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.colors.body};
    color: ${({theme}) => theme.colors.text};
    font-family: ${FontFamily};
    font-weight: 300;
    text-align: left;
  }
`;

export default {
  colors: Colors,
  fontSizes: FontSizes,
};
