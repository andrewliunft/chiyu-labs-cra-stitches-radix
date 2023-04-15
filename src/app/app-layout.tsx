import Box from '@components/box';
import NavButton from '@components/button/nav-button';
import Spacer from '@components/spacer';
import Typography from '@components/typography';
import { styled } from '@styles/stitches.config';
import { Link, Outlet, useLocation } from 'react-router-dom';

const APP_BAR_HEIGHT = 60;
const NAV_BAR_WIDTH = 60;

const AppBar = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: '$z999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 30,
  height: APP_BAR_HEIGHT,
  borderBottom: '1px solid $grey100',
  backgroundColor: '$white',
});
const NavBar = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: NAV_BAR_WIDTH,
  zIndex: '$z99',
  borderRight: '1px solid $grey100',
  backgroundColor: '$white',
  px: 4,
});

const AppLayout = () => {
  return (
    <>
      <AppBar>
        <Box css={{ display: 'flex', alignItems: 'center', columnGap: 20 }}>
          <Typography weight={'bold'} variant={'h6'} css={{ color: '$grey500' }}>
            {`Chiyu Labs`}
          </Typography>
          <Typography weight={'medium'} variant={'caption'} css={{ color: '$grey300' }}>
            {`Lab: CRA - Stitches - Radix`}
          </Typography>
        </Box>
        <Box css={{ display: 'flex', alignItems: 'center', columnGap: 20 }}>
          <Link to='/'>Top</Link>
          <Link to='/about'>About</Link>
        </Box>
      </AppBar>
      <Spacer axis={'vertical'} size={APP_BAR_HEIGHT} />
      <NavBar>
        <Spacer axis={'vertical'} size={APP_BAR_HEIGHT} />
        <NavButton iconName='home' navName='Top' />
      </NavBar>
      <Box
        as='main'
        css={{
          ml: NAV_BAR_WIDTH,
          px: 20,
          py: 15,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '$white',
        }}>
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayout;
