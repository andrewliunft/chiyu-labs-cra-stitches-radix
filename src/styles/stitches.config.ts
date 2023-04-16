import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';
import { red, pink, blue, pear, amber, grey } from './colors';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
  theme: {
    colors: {
      primary50: blue[50],
      primary100: blue[100],
      primary200: blue[200],
      primary300: blue[300],
      primary400: blue[400],
      primary500: blue[500],
      primary600: blue[600],
      primary700: blue[700],
      primary800: blue[800],
      primary900: blue[900],
      secondary50: pink[50],
      secondary100: pink[100],
      secondary200: pink[200],
      secondary300: pink[300],
      secondary400: pink[400],
      secondary500: pink[500],
      secondary600: pink[600],
      secondary700: pink[700],
      secondary800: pink[800],
      secondary900: pink[900],
      error50: red[50],
      error100: red[100],
      error200: red[200],
      error300: red[300],
      error400: red[400],
      error500: red[500],
      error600: red[600],
      error700: red[700],
      error800: red[800],
      error900: red[900],
      success50: pear[50],
      success100: pear[100],
      success200: pear[200],
      success300: pear[300],
      success400: pear[400],
      success500: pear[500],
      success600: pear[600],
      success700: pear[700],
      success800: pear[800],
      success900: pear[900],
      warning50: amber[50],
      warning100: amber[100],
      warning200: amber[200],
      warning300: amber[300],
      warning400: amber[400],
      warning500: amber[500],
      warning600: amber[600],
      warning700: amber[700],
      warning800: amber[800],
      warning900: amber[900],
      grey10: grey[10],
      grey30: grey[30],
      grey50: grey[50],
      grey100: grey[100],
      grey200: grey[200],
      grey300: grey[300],
      grey400: grey[400],
      grey500: grey[500],
      grey600: grey[600],
      grey700: grey[700],
      grey800: grey[800],
      grey900: grey[900],
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      transparent: 'transparent',
    },
    radii: {
      0: '0px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      10: '10px',
      cylinder: '9999px',
      rounded: '50%',
    },
    shadows: {
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0px 0px 6px rgba(0, 0, 0, 0.2);',
    },
    zIndices: {
      z0: 0,
      z10: 10,
      z20: 20,
      z30: 30,
      z40: 40,
      z50: 50,
      z99: 99,
      z999: 999,
      z1000: 1000,
      zAuto: 'auto',
    },
    transitions: {
      colors:
        'color 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 300ms cubic-bezier(0.4, 0, 0.2, 1), fill 300ms cubic-bezier(0.4, 0, 0.2, 1), stroke 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  utils: {
    m: (value: PropertyValue<'margin'> | ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: PropertyValue<'marginLeft' | 'marginRight'> | ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop' | 'marginBottom'>) => ({ marginTop: value, marginBottom: value }),
    mt: (value: PropertyValue<'marginTop'> | ScaleValue<'space'>) => ({ marginTop: value }),
    mr: (value: PropertyValue<'marginRight'> | ScaleValue<'space'>) => ({ marginRight: value }),
    mb: (value: PropertyValue<'marginBottom'> | ScaleValue<'space'>) => ({ marginBottom: value }),
    ml: (value: PropertyValue<'marginLeft'> | ScaleValue<'space'>) => ({ marginLeft: value }),
    p: (value: PropertyValue<'padding'> | ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: PropertyValue<'paddingLeft' | 'paddingRight'> | ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop' | 'paddingBottom'> | ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: PropertyValue<'paddingTop'> | ScaleValue<'space'>) => ({ paddingTop: value }),
    pr: (value: PropertyValue<'paddingRight'> | ScaleValue<'space'>) => ({ paddingRight: value }),
    pb: (value: PropertyValue<'paddingBottom'> | ScaleValue<'space'>) => ({ paddingBottom: value }),
    pl: (value: PropertyValue<'paddingLeft'> | ScaleValue<'space'>) => ({ paddingLeft: value }),
  },
});
