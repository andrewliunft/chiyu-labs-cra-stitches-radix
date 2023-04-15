import { forwardRef, ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@styles/stitches.config';
import Typography from '@components/typography';
import Icon from '@components/icon';
import Spacer from '@components/spacer';

const StyledLink = styled(Link, {
  display: 'block',
  cursor: 'pointer',
  borderRadius: '$4',
  border: '1px solid $white',
  mx: 'auto',
  p: 5,
  mb: 20,
  overflow: 'hidden',
  backgroundColor: '$white',
  transition: '$colors',
  variants: {
    glow: {
      true: {
        backgroundColor: '$secondary100',
        border: '1px solid secondary100',
      },
      false: {
        '&:hover': {
          border: '1px solid $secondary50',
          backgroundColor: '$secondary50',
        },
        '&:active': {
          border: '1px solid $secondary100',
          backgroundColor: '$secondary100',
        },
      },
    },
  },
  defaultVariants: {
    glow: false,
  },
});

interface NavButtonProps extends ComponentProps<typeof StyledLink> {
  iconName: string;
  navName: string;
}

const NavLinkButton = forwardRef<HTMLAnchorElement, NavButtonProps>(({ iconName, navName, ...restProps }, ref) => {
  return (
    <StyledLink ref={ref} {...restProps}>
      <Icon fill iconName={`${iconName}`} />
      <Spacer axis={'vertical'} size={4} />
      <Typography
        variant={'caption'}
        css={{
          textAlign: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>{`${navName}`}</Typography>
    </StyledLink>
  );
});

NavLinkButton.displayName = 'NavLinkButton';
export default NavLinkButton;
