import { globalStyles } from '../styles/global-styles';
import Typography from '@components/typography';
import StatusCard from '@components/card/status-card';
import Box from '@components/box';

const App = () => {
  globalStyles();
  return (
    <Box id='app-container' css={{ flexGrow: 1 }}>
      <StatusCard />
    </Box>
  );
};

export default App;
