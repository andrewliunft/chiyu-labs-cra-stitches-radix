import { ComponentProps, forwardRef } from 'react';
import { styled } from '@styles/stitches.config';
import Icon from '@components/icon';

const StyledButton = styled('button', {
  display: 'block',
  borderWidth: 1,
  borderStyle: 'solid',
  cursor: 'pointer',
  position: 'relative',
  transition: '$colors',
  variants: {
    color: {
      'grey-primary': {},
    },
    variant: {
      solid: {},
      outlined: {},
      ghost: {},
    },
    shape: {
      rounded: {
        borderRadius: '$rounded',
      },
      squared: {
        borderRadius: '$4',
      },
    },
    size: {
      micro: {
        width: 16,
        height: 16,
        fontSize: 12,
      },
      mini: {
        width: 20,
        height: 20,
        fontSize: 16,
      },
      tiny: {
        width: 24,
        height: 24,
        fontSize: 18,
      },
      small: {
        width: 30,
        height: 30,
        fontSize: 24,
      },
      medium: {
        width: 36,
        height: 36,
        fontSize: 30,
      },
    },
    glow: {
      true: {},
    },
  },
  compoundVariants: [
    {
      color: 'grey-primary',
      variant: 'solid',
      glow: false,
      css: {
        color: '$white',
        borderColor: '$grey300',
        backgroundColor: '$grey300',
        '&:hover': {
          color: '$white',
          borderColor: '$primary300',
          backgroundColor: '$primary300',
        },
        '&:active': {
          color: '$white',
          borderColor: '$primary500',
          backgroundColor: '$primary500',
        },
      },
    },
    {
      color: 'grey-primary',
      variant: 'solid',
      glow: true,
      css: {
        color: '$white',
        borderColor: '$primary500',
        backgroundColor: '$primary500',
      },
    },
    {
      color: 'grey-primary',
      variant: 'ghost',
      glow: false,
      css: {
        color: '$grey500',
        borderColor: '$transparent',
        backgroundColor: '$transparent',
        '&:hover': {
          color: '$primary400',
          borderColor: '$primary50',
          backgroundColor: '$primary50',
        },
        '&:active': {
          color: '$primary600',
          borderColor: '$primary100',
          backgroundColor: '$primary100',
        },
      },
    },
    {
      color: 'grey-primary',
      variant: 'ghost',
      glow: true,
      css: {
        color: '$primary600',
        borderColor: '$primary100',
        backgroundColor: '$primary100',
      },
    },
    {
      color: 'grey-primary',
      variant: 'outlined',
      glow: false,
      css: {
        color: '$grey500',
        borderColor: '$grey500',
        backgroundColor: '$transparent',
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
      },
    },
    {
      color: 'grey-primary',
      variant: 'outlined',
      glow: true,
      css: {
        color: '$primary600',
        borderColor: '$primary600',
        backgroundColor: '$primary100',
      },
    },
  ],
  defaultVariants: {
    size: 'tiny',
    color: 'grey-primary',
    shape: 'rounded',
    variant: 'ghost',
    glow: false,
  },
});

interface IconButtonProps extends ComponentProps<typeof StyledButton> {
  iconName: string;
  isIconFill?: boolean;
  isIconBold?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconName, isIconFill = false, isIconBold, ...restProps }, ref) => {
    return (
      <StyledButton ref={ref} {...restProps}>
        <Icon
          iconName={`${iconName}`}
          fill={isIconFill}
          bold={isIconBold}
          css={{
            color: 'inherit',
            fontSize: 'inherit',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </StyledButton>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
