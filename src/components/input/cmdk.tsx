import { Command } from 'cmdk';
import { styled } from '@styles/stitches.config';

export const CommandRoot = styled(Command, {});
export const CommandGroup = styled(Command.Group, {});
export const CommandInput = styled(Command.Input, {});
export const CommandList = styled(Command.List, {});
export const CommandSeparator = styled(Command.Separator, {});
export const CommandItem = styled(Command.Item, {
  px: 10,
  minHeight: 40,
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$4',
  cursor: 'pointer',
  '&[aria-selected="true"]': {
    backgroundColor: '$primary10',
  },
});
export const CommandEmpty = styled(Command.Empty, {
  px: 10,
  minHeight: 40,
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$4',
});
