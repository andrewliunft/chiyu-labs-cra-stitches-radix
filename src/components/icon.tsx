import { ComponentProps, forwardRef } from 'react';
import { styled } from '@styles/stitches.config';

const Symbol = styled('i', {
  display: 'block',
  textAlign: 'center',
  variants: {
    bold: {
      true: {},
    },
    fill: {
      true: {},
    },
  },
  compoundVariants: [
    {
      bold: true,
      fill: true,
      css: {
        fontVariationSettings: `'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48`,
      },
    },
    {
      bold: true,
      fill: false,
      css: {
        fontVariationSettings: `'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48`,
      },
    },
    {
      bold: false,
      fill: true,
      css: {
        fontVariationSettings: `'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 48`,
      },
    },
    {
      bold: false,
      fill: false,
      css: {
        fontVariationSettings: `'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48`,
      },
    },
  ],
  defaultVariants: {
    fill: false,
    bold: false,
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
