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
        primaryHover: string;
        secondaryHover: string;
        dangerHover: string;
        warningHover: string;
        successHover: string;
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
    loader: {
      loaderColors: {
        primary: string;
        secondary: string;
        danger: string;
        warning: string;
        success: string;
      };
      loaderSizeWidth: {
        s: string;
        m: string;
        l: string;
      };
      loaderSizeHeight: {
        s: string;
        m: string;
        l: string;
      };
    };
  }
}
