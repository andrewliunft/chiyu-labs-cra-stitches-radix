import React, { ComponentProps, useRef } from 'react';
import { styled } from '@styles/stitches.config';
import useIntersectionObserver from '@custom-hooks/use-intersection-observer';
import Typography from '@components/typography';

const StyledBox = styled('div', {
  borderRadius: '$4',
  height: 80,
  border: '1px solid $grey300',
});

interface NotificationCardProps extends ComponentProps<typeof StyledBox> {
  title: string;
  isLast: boolean;
}

const NotificationCard = ({ title, isLast, ...restProps }: NotificationCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  if (isLast && isVisible) {
    console.log('fruit', title);
  }

  return (
    <StyledBox ref={ref} {...restProps}>
      <Typography variant='subtitle'>{`NotificationCard`}</Typography>
      <Typography variant='body'>{`${title}`}</Typography>
    </StyledBox>
  );
};

NotificationCard.displayName = 'NotificationCard';
export default NotificationCard;
