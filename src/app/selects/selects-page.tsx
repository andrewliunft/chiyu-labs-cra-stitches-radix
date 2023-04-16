import { useState } from 'react';
import Box from '@components/box';
import Icon from '@components/icon';
import Typography from '@components/typography';
import Spacer from '@components/spacer';
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
import { fruits } from '@store/mock-data';

const SELECT_WIDTH = 250;
const SELECT_CONTENT_MAX_HEIGHT = 280;

const SelectsPage = () => {
  const [fruit, setFruit] = useState<string | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <Box id='selects-container' css={{ flexGrow: 1 }}>
      {/* Page Title */}
      <Box css={{ display: 'flex', alignItems: 'center', columnGap: 10, color: '$grey400' }}>
        <Icon fill iconName='widgets' css={{ fontSize: 18 }} />
        <Typography variant='subtitle' weight={'medium'}>{`Selects`}</Typography>
      </Box>
      <Spacer axis={'vertical'} size={15} />
      <Box css={{ width: SELECT_WIDTH, overflow: 'hidden' }}>
        <SelectRoot
          open={open}
          onOpenChange={(open) => setOpen(open)}
          value={fruit}
          onValueChange={(value) => setFruit(value)}>
          <SelectTrigger>
            <Box css={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <SelectValue placeholder='Select a fruit' />
            </Box>
            <SelectIcon css={{ ml: 'auto', display: 'block', color: '$grey400' }}>
              <Icon iconName='arrow_drop_down' />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectContent position='popper' sideOffset={4} css={{ maxHeight: SELECT_CONTENT_MAX_HEIGHT }}>
              <SelectViewport>
                {fruits.map((fruit) => (
                  <SelectItem key={fruit.id} value={fruit.value}>
                    <SelectItemText>{`${fruit.name}`}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectViewport>
            </SelectContent>
          </SelectPortal>
        </SelectRoot>
      </Box>
    </Box>
  );
};

export default SelectsPage;
