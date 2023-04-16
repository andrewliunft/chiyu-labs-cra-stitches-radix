import { keyframes, styled } from '@styles/stitches.config';

const rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled('div', {
  width: '$$size',
  height: '$$size',
  border: '5px solid #FFF',
  borderWidth: '1.2px',
  borderStyle: 'solid',
  borderColor: '$$spinnerColor',
  borderBottomColor: '#grey200',
  borderRadius: '$rounded',
  display: 'inline-block',
  animation: `${rotation} 1s linear infinite`,
});

export default Spinner;
