import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  pallete: {
    white: '#FFFFFF',
  },
  button: {
    buttonColors: {
      primary: '#63B3ED',
      secondary: '#d1d1d1',
      danger: '#F56565',
      warning: '#F6AD55',
      success: '#68D391',
      primaryHover: '#369ee7',
      secondaryHover: '#c2c2c2',
      dangerHover: '#e10e0e',
      warningHover: '#f28b0d',
      successHover: '#38c26d',
    },
    buttonSizeWidth: {
      s: '70px',
      m: '80px',
      l: '100px',
    },
    buttonSizeHeight: {
      s: '28px',
      m: '32px',
      l: '40px',
    },
  },
  loader : {
    loaderColors: {
      primary: '#63B3ED',
      secondary: 'RGBA(0, 0, 0, 0.16)',
      danger: '#F56565',
      warning: '#F6AD55',
      success: '#68D391',
    },
    loaderSizeWidth: {
      s: '16px',
      m: '20px',
      l: '25px',
    },
    loaderSizeHeight: {
      s: '16px',
      m: '20px',
      l: '25px',
    },
  }
};

export { theme };
