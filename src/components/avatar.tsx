import React, { ComponentProps } from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { styled } from '@styles/stitches.config';
import { getNameInitials } from '@utils/get-wording';
import Typography from './typography';

const AvatarRoot = styled(RadixAvatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '$rounded',
  backgroundColor: '$grey300',
});
const AvatarImage = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});
const AvatarFallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$grey500',
  color: '$white',
});

interface AvatarProps extends ComponentProps<typeof AvatarRoot> {
  name: string;
  picture: string;
}

const Avatar = ({ name, picture, ...restProps }: AvatarProps) => {
  return (
    <AvatarRoot {...restProps}>
      <AvatarImage alt={`${name}`} src={`${picture}`} />
      <AvatarFallback delayMs={600}>
        <Typography variant='button' weight={'medium'}>
          {getNameInitials(name)}
        </Typography>
      </AvatarFallback>
    </AvatarRoot>
  );
};

interface AvatarMoreProps extends ComponentProps<typeof AvatarRoot> {
  remainNumber: number;
}

export const AvatarMore = ({ remainNumber, ...restProps }: AvatarMoreProps) => {
  return (
    <AvatarRoot {...restProps}>
      <AvatarImage alt={`avatar-more-${remainNumber}`} src={''} />
      <AvatarFallback delayMs={600}>
        <Typography variant='button' weight={'bold'}>{`+${remainNumber}`}</Typography>
      </AvatarFallback>
    </AvatarRoot>
  );
};

export default Avatar;
