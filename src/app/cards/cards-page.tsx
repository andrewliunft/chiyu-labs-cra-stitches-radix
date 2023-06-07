import React from 'react';
import Box from '@components/box';
import StatusCard from '@components/card/status-card';
import Icon from '@components/icon';
import Typography from '@components/typography';
import Spacer from '@components/spacer';

const CardsPage = () => {
  return (
    <Box id='cards-container' css={{ flexGrow: 1 }}>
      {/* Page Title */}
      <Box css={{ display: 'flex', alignItems: 'center', columnGap: 10, color: '$grey50' }}>
        <Icon fill iconName='tab_group' css={{ fontSize: 18 }} />
        <Typography variant='subtitle' weight={'medium'}>{`Cards`}</Typography>
      </Box>
      <Spacer axis={'vertical'} size={15} />
      <StatusCard />
    </Box>
  );
};

export default CardsPage;
