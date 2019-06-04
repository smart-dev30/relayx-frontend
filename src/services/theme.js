import { createMuiTheme } from '@material-ui/core/styles';

export const Colors = {
  DarkGrey: '#2a2a2e',
  Slate: '#4f5f6d',
  SkyBlue: '#6ba1ff',
  LightPeriwinkle: '#ccdcff',
  ReddishPink: '#ff2d55',
  OrangeYellow: '#f5a623',
  LightGrey: '#d7d7db',
  PaleGrey: '#f8f8fa',
  BlueyGrey: '#90949c',
  MariGold: '#ffcc00',
  FrogGreen: '#6dc110',
  ClearBlue: '#2669ff',
  Light: '#ededed',
  Dusk: '#4e5571',
  OrangeYellowWithOpacity: (opacity = 1) => `rgba(245, 166, 35, ${opacity})`,
  LightPeriwinkleWithOpacity: (opacity = 1) => `rgba(204, 220, 255, ${opacity})`,
};

export default createMuiTheme({
  palette: {
    primary: {
      main: Colors.ClearBlue,
      contrastText: '#FFF'
    },
    secondary: {
      main: '#FFF',
      contrastText: Colors.ClearBlue
    },
    background: {
      paper: '#EFEFEF',
      dark: '#282c34',
      default: Colors.LightPeriwinkle,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});
