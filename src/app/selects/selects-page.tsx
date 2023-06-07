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
import SelectWithCombobox from '@components/input/select-with-combobox';

const SELECT_WIDTH = 250;
const SELECT_CONTENT_MAX_HEIGHT = 280;

const SelectsPage = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [fruit1, setFruit1] = useState<string | undefined>();
  const [fruit2, setFruit2] = useState<string | undefined>();

  return (
    <Box id='selects-container' css={{ flexGrow: 1 }}>
      {/* Page Title */}
      <Box css={{ display: 'flex', alignItems: 'center', columnGap: 10, color: '$grey50' }}>
        <Icon fill iconName='widgets' css={{ fontSize: 18 }} />
        <Typography variant='subtitle' weight={'medium'}>{`Selects`}</Typography>
      </Box>
      <Spacer axis={'vertical'} size={15} />
      <Box css={{ width: SELECT_WIDTH, overflow: 'hidden' }}>
        <SelectRoot
          open={open1}
          onOpenChange={(open) => setOpen1(open)}
          value={fruit1}
          onValueChange={(value) => setFruit1(value)}>
          <SelectTrigger>
            <Box css={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <SelectValue placeholder='Select a fruit 1' />
            </Box>
            <SelectIcon css={{ ml: 'auto', display: 'block', color: '$grey50' }}>
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
      <Spacer axis={'vertical'} size={15} />
      <Box css={{ width: SELECT_WIDTH }}>
        <SelectWithCombobox
          open={open2}
          onOpenChange={(open) => setOpen2(true)}
          value={fruit2}
          onValueChange={(value) => setFruit2(value)}
          options={fruits}
        />
      </Box>
    </Box>
  );
};

export default SelectsPage;
