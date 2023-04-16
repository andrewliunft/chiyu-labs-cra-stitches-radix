import { styled } from '@styles/stitches.config';
import * as RadixPopover from '@radix-ui/react-popover';
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '@styles/keyframes';

export const PopoverRoot = styled(RadixPopover.Root, {});
export const PopoverTrigger = styled(RadixPopover.Trigger, {});
export const PopoverAnchor = styled(RadixPopover.Anchor, {});
export const PopoverPortal = styled(RadixPopover.Portal, {});
export const PopoverContent = styled(RadixPopover.Content, {
  borderRadius: '$4',
  width: 260,
  overscrollBehavior: 'contain',
  backgroundColor: '$white',
  boxShadow: '$md',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});
export const PopoverClose = styled(RadixPopover.Close, {});
export const PopoverArrow = styled(RadixPopover.Arrow, {});
