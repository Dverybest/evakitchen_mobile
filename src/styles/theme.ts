import { DefaultTheme } from 'styled-components';
import { main } from './colors';

const myTheme: DefaultTheme = {
  borderRadius: '25px',

  colors: {
    main: main,
    secondary: 'magenta',
  },
};

export { myTheme };