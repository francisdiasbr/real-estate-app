import { MD3LightTheme as DefaultTheme, useTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAEFE5',
    black: {
      main: '#000000',
      alpha50: '#0000000A',
      alpha100: '#0000000F',
      alpha200: '#00000014',
      alpha300: '#00000029',
      alpha400: '#0000003D',
      alpha500: '#0000005C',
      alpha600: '#0000007A',
      alpha700: '#000000A3',
      alpha800: '#000000CC',
      alpha900: '#000000EB',
    },
    white: {
      main: '#FFFFFF',
      alpha50: '#FFFFFF0A',
      alpha100: '#FFFFFF0F',
      alpha200: '#FFFFFF14',
      alpha300: '#FFFFFF29',
      alpha400: '#FFFFFF3D',
      alpha500: '#FFFFFF5C',
      alpha600: '#FFFFFF7A',
      alpha700: '#FFFFFFA3',
      alpha800: '#FFFFFFCC',
      alpha900: '#FFFFFFEB',
    },
    gray50: '#FAFAF9',
    gray100: '#F8F7F7',
    gray200: '#F1F0EE',
    gray300: '#E8E5E3',
    gray400: '#E1DDDB',
    gray500: '#DAD6D3',
    gray600: '#B2AAA4',
    gray700: '#8A7E75',
    gray800: '#5E564F',
    gray900: '#2F2B28',
    red50: '#FFF5F5',
    red100: '#FED7D7',
    red200: '#FEB2B2',
    red300: '#FC8181',
    red400: '#F56565',
    red500: '#E53E3E',
    red600: '#C53030',
    red700: '#9B2C2C',
    red800: '#822727',
    red900: '#63171B',
    orange50: '#FCF7F2',
    orange100: '#FAEFE5',
    orange200: '#F3D9C3',
    orange300: '#ECC3A1',
    orange400: '#E4A877',
    orange500: '#DA8744',
    orange600: '#D17529',
    orange700: '#B76624',
    orange800: '#95531D',
    orange900: '#6F3E16',
    yellow50: '#FEFCE2',
    yellow100: '#FEF9B1',
    yellow200: '#FFF580',
    yellow300: '#FFF14F',
    yellow400: '#FFED1E',
    yellow500: '#ECDA00',
    yellow600: '#BBAD00',
    yellow700: '#8A8000',
    yellow800: '#595200',
    yellow900: '#282500',
    green50: '#F2F8F2',
    green100: '#E2EFE1',
    green200: '#C3DEC0',
    green300: '#9CC897',
    green400: '#6DAE65',
    green500: '#4A8144',
    green600: '#4A8144',
    green700: '#3B6837',
    green800: '#30542C',
    green900: '#243F21',
    teal50: '#F2F8F2',
    teal100: '#E2EFE1',
    teal200: '#C3DEC0',
    teal300: '#9CC897',
    teal400: '#6DAE65',
    teal500: '#4A8144',
    teal600: '#4A8144',
    teal700: '#3B6837',
    teal800: '#30542C',
    teal900: '#243F21',
    blue50: '#F2F8F2',
    blue100: '#E2EFE1',
    blue200: '#C3DEC0',
    blue300: '#9CC897',
    blue400: '#6DAE65',
    blue500: '#4A8144',
    blue600: '#4A8144',
    blue700: '#3B6837',
    blue800: '#30542C',
    blue900: '#243F21',
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
