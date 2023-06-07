import React, { ComponentProps, forwardRef } from 'react';
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandRoot,
  CommandSeparator,
} from '@components/input/cmdk';
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@components/input/select';
import Box from '@components/box';
import Icon from '@components/icon';

interface SelectWithComboboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string | undefined;
  onValueChange: (value: string) => void;
  options: { id: string; name: string; value: string }[];
}

const SelectWithCombobox = ({ open, onOpenChange, value, onValueChange, options }: SelectWithComboboxProps) => {
  return (
    <SelectRoot
      open={open}
      onOpenChange={(open) => onOpenChange(open)}
      value={value}
      onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger>
        <Box css={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <SelectValue placeholder='Select a fruit 2' />
        </Box>
        <SelectIcon css={{ ml: 'auto', display: 'block', color: '$grey50' }}>
          <Icon iconName='arrow_drop_down' />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent position='popper' sideOffset={4} css={{ maxHeight: 280 }}>
          <SelectViewport>
            <CommandRoot>
              <Box css={{ display: 'flex', alignItems: 'center', columnGap: 4 }}>
                <Icon iconName='search' />
                <CommandInput
                  css={{
                    border: '1px solid $grey10',
                    outline: 'none',
                    width: '100%',
                    pr: 12,
                    borderRadius: '$4',
                  }}
                />
              </Box>
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {options.map((option) => (
                  <CommandItem key={option.id} value={option.value}>{`${option.name}`}</CommandItem>
                ))}
              </CommandList>
            </CommandRoot>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
};

export default SelectWithCombobox;
