import { ComponentProps, forwardRef } from 'react';
import { PropertyValue, ScaleValue } from '@stitches/react';
import { styled } from '../styles/stitches.config';

const Gifs = styled('span', {
  display: 'block',
  variants: {
    axis: {
      horizontal: {
        width: '$$size',
        minWidth: '$$size',
        height: 1,
        minHeight: 1,
      },
      vertical: {
        width: 1,
        minWidth: 1,
        height: '$$size',
        minHeight: '$$size',
      },
    },
  },
});

interface SpacerProps extends ComponentProps<typeof Gifs> {
  size: number | string;
}

const Spacer = forwardRef<HTMLSpanElement, SpacerProps>(({ size, ...restProps }, ref) => {
  return <Gifs ref={ref} css={{ $$size: typeof size === 'number' ? `${size}px` : size }} {...restProps} />;
});

Spacer.displayName = 'Spacer';
export default Spacer;
