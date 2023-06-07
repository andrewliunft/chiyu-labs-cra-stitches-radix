import { ComponentProps } from 'react';
import { styled } from '@styles/stitches.config';
import { rotation } from '@styles/keyframes';

const Loader = styled('div', {
  border: '5px solid #FFF',
  borderWidth: '1.2px',
  borderStyle: 'solid',
  borderBottomColor: '$grey30',
  borderRadius: '$rounded',
  display: 'inline-block',
  animation: `${rotation} 1s linear infinite`,
});

interface SpinnerProps extends ComponentProps<typeof Loader> {
  color: string;
  size: number | string;
}

const Spinner = ({ color, size }: SpinnerProps) => {
  return (
    <Loader
      css={{
        width: typeof size === 'number' ? size : `${size}px`,
        height: typeof size === 'number' ? size : `${size}px`,
        borderTopColor: color,
        borderRightColor: color,
        borderLeftColor: color,
      }}
    />
  );
};

export default Spinner;
