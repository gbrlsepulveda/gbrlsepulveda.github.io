import {rem} from 'polished';
import {createGlobalStyle} from 'styled-components';

export const Colors = {
  body: '#FFF',
  text: '#363537',
  primary: '#16a085',
};

export const FontFamily = {
  title: `'Bitter', serif`,
  text: `'Open Sans', sans-serif`,
};

export const FontSizes = {
  small: rem(18),
  medium: rem(24),
  large: rem(36),
  xLarge: rem(72),
};

export default {
  Colors,
  FontSizes,
  FontFamily,
};

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.Colors.body};
    color: ${({theme}) => theme.Colors.text};
    font-family: ${({theme}) => theme.FontFamily.text};
    font-weight: 300;
    text-align: left;
  }
`;
