import React, { ComponentProps, ReactNode, forwardRef } from 'react';
import { styled } from '@styles/stitches.config';
import Typography from '@components/typography';
import Spinner from '@components/spinner';

const StyledButton = styled('button', {
  px: 8,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '$colors',
  borderWidth: 1,
  cursor: 'pointer',
  minHeight: 30,
  variants: {
    shape: {
      cylinder: {
        borderRadius: '$cylinder',
      },
      squared: {
        borderRadius: '$4',
      },
    },
    variant: {
      // solid: {},
      outlined: {},
      // ghost: {},
    },
    color: {
      primary: {},
      // secondary: {},
      // grey: {},
      // success: {},
      // warning: {},
      // error: {},
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      color: 'primary',
      css: {
        borderStyle: 'solid',
        color: '$primary500',
        borderColor: '$primary500',
        backgroundColor: '$white',
        '&:hover': {
          color: '$primary400',
          borderColor: '$primary400',
          backgroundColor: '$primary50',
        },
        '&:active': {
          color: '$primary600',
          borderColor: '$primary600',
          backgroundColor: '$primary100',
        },
        '&[data-state=open]': {
          color: '$primary600',
          borderColor: '$primary600',
          backgroundColor: '$primary100',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'outlined',
    color: 'primary',
    shape: 'squared',
  },
});

interface ButtonProps extends ComponentProps<typeof StyledButton> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...restProps }, ref) => {
  return (
    <StyledButton ref={ref} {...restProps}>
      {children}
      {/* <Spinner size={16} color={'$primary600'} /> */}
    </StyledButton>
  );
});

Button.displayName = 'Button';
export default Button;
