import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: {
      white: string;
    };
    button: {
      buttonColors: {
        primary: string;
        secondary: string;
        danger: string;
        warning: string;
        success: string;
      };
      buttonSizeWidth: {
        s: string;
        m: string;
        l: string;
      };
      buttonSizeHeight: {
        s: string;
        m: string;
        l: string;
      };
    };
  }
}
