import { forwardRef, ComponentProps } from 'react';
import { styled } from '@styles/stitches.config';
import Typography from '@components/typography';
import Icon from '@components/icon';

const Wrapper = styled('div', {
  cursor: 'pointer',
  borderRadius: '$4',
  border: '1px solid $secondary200',
  mx: 'auto',
  overflow: 'hidden',
  backgroundColor: '$white',
  transition: '$colors',
  '&:hover': {
    backgroundColor: '$secondary50',
  },
  '&:active': {
    backgroundColor: '$secondary200',
  },
  variants: {
    glow: {
      true: { backgroundColor: '$secondary200' },
    },
  },
  defaultVariants: {
    glow: false,
  },
});

interface NavButtonProps extends ComponentProps<typeof Wrapper> {
  iconName: string;
  navName: string;
}

const NavButton = forwardRef<HTMLDivElement, NavButtonProps>(({ iconName, navName, ...restProps }, ref) => {
  return (
    <Wrapper ref={ref} {...restProps}>
      <Icon iconName={`${iconName}`} />
      <Typography variant={'caption'} css={{ textAlign: 'center' }}>{`${navName}`}</Typography>
    </Wrapper>
  );
});

NavButton.displayName = 'NavButton';
export default NavButton;
