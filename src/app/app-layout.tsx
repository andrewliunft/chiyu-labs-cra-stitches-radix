import { Outlet, useLocation } from 'react-router-dom';
import { styled } from '@styles/stitches.config';
import Box from '@components/box';
import Typography from '@components/typography';
import Spacer from '@components/spacer';
import NavLinkButton from '@components/button/nav-link-button';

const APP_BAR_HEIGHT = 60;
const NAV_BAR_WIDTH = 65;

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
  py: 15,
  px: 4,
});

const AppLayout = () => {
  const location = useLocation();
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
        <Box css={{ display: 'flex', alignItems: 'center', columnGap: 20 }}></Box>
      </AppBar>
      <Spacer axis={'vertical'} size={APP_BAR_HEIGHT} />
      <NavBar>
        <Spacer axis={'vertical'} size={APP_BAR_HEIGHT} />
        {/* TODO: Need Tooltip */}
        <NavLinkButton to='/' iconName='home' navName='Top' title='Top' glow={location.pathname === '/'} />
        <NavLinkButton
          to='/buttons'
          iconName='controller_gen'
          navName='Buttons'
          title='Buttons'
          glow={location.pathname === '/buttons'}
        />
        <NavLinkButton
          to='/cards'
          iconName='tab_group'
          navName='Cards'
          title='Cards'
          glow={location.pathname === '/cards'}
        />
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
