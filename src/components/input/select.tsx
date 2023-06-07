import React, { forwardRef } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { styled } from '@styles/stitches.config';

export const SelectRoot = styled(RadixSelect.Root, {});
export const SelectTrigger = styled(RadixSelect.Trigger, {
  // all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  overflow: 'hidden',
  height: 30,
  pl: 8,
  width: '100%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$grey30',
  borderRadius: '$4',
  backgroundColor: '$white',
  cursor: 'pointer',
  transition: '$colors',
  outline: 'none',
  '&[data-state=open]': {
    borderWidth: 2,
    borderColor: '$grey40',
  },
});
// * SelectValue will render the chosen SelectItemText
export const SelectValue = styled(RadixSelect.Value, {});
export const SelectIcon = styled(RadixSelect.Icon, {});
export const SelectPortal = styled(RadixSelect.Portal, {});
export const SelectContent = styled(RadixSelect.Content, {
  p: 10,
  boxShadow: '$md',
  borderRadius: '$4',
  backgroundColor: '$white',
  width: 'var(--radix-select-trigger-width)',
  // maxHeight: 'var(--radix-select-content-available-height)',
});
export const SelectViewport = styled(RadixSelect.Viewport, {});
export const SelectGroup = styled(RadixSelect.Group, {});
export const SelectLabel = styled(RadixSelect.Label, {});
export const SelectItem = styled(RadixSelect.Item, {
  px: 10,
  transition: '$colors',
  cursor: 'pointer',
  borderRadius: '$4',
  minHeight: 40,
  display: 'flex',
  alignItems: 'center',
  '&[data-state=checked]': {
    backgroundColor: '$primary20',
  },
  '&[data-state=unchecked]': {
    '&[data-highlighted]': {
      outline: 'none',
      backgroundColor: '$primary10',
    },
  },
});
export const SelectItemText = styled(RadixSelect.ItemText, {});
export const SelectItemIndicator = styled(RadixSelect.ItemIndicator, {});
export const SelectSeparator = styled(RadixSelect.Separator, {});
export const SelectScrollUpButton = styled(RadixSelect.ScrollUpButton, {});
export const SelectScrollDownButton = styled(RadixSelect.ScrollDownButton, {});
export const SelectArrow = styled(RadixSelect.Arrow, {});
