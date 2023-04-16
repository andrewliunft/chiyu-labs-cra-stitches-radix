import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': { margin: 0 },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    // overflow: 'hidden',
  },
  body: {
    // overflow: 'auto',
    lineHeight: 1.5,
    color: '$grey500',
    fontFamily: `'Inter', 'Noto Sans TC', sans-serif, monospace`,
    '-webkit-font-smoothing': 'antialiased',
  },
  'html, body': {
    height: '100%',
  },
  '#root': {
    isolation: 'isolate',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  'ul, ol': {
    listStyle: 'none',
    padding: 0,
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
  },
  '.material-symbols-rounded': {
    'font-variation-settings': `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
  },
});
