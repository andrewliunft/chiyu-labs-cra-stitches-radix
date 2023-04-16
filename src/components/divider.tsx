import { styled } from '@styles/stitches.config';
import * as RadixSeparator from '@radix-ui/react-separator';

// * 顏色用 css={{ background-color: 'some-color' }}

const Divider = styled(RadixSeparator.Root, {
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

export default Divider;
