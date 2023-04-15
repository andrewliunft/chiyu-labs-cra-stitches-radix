import { globalStyles } from '../styles/global-styles';
import Typography from '@components/typography';
import Box from '@components/box';
import Spacer from '@components/spacer';
import Icon from '@components/icon';

const App = () => {
  globalStyles();
  return (
    <Box id='app-container' css={{ flexGrow: 1 }}>
      {/* Page Title */}
      <Box css={{ display: 'flex', alignItems: 'center', columnGap: 10, color: '$grey400' }}>
        <Icon fill iconName='home' css={{ fontSize: 18 }} />
        <Typography variant='subtitle' weight={'medium'}>{`Home`}</Typography>
      </Box>
      <Spacer axis={'vertical'} size={15} />
    </Box>
  );
};

export default App;
