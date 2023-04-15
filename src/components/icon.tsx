import { ComponentProps, forwardRef } from 'react';
import { styled } from '@styles/stitches.config';

const Symbol = styled('i', {
  fontVariationSettings: `'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48`,
  variants: {
    fill: {
      true: {
        fontVariationSettings: `'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 48`,
      },
    },
  },
});

interface IconProps extends ComponentProps<typeof Symbol> {
  iconName: string;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(({ iconName, ...restProps }, ref) => {
  return (
    <Symbol ref={ref} className='material-symbols-rounded' {...restProps}>
      {`${iconName}`}
    </Symbol>
  );
});

Icon.displayName = 'Icon';
export default Icon;
