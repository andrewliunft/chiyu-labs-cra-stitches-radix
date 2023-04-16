import { Fragment, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from '@styles/stitches.config';
import Box from '@components/box';
import Typography from '@components/typography';
import Spacer from '@components/spacer';
import NavLinkButton from '@components/button/nav-link-button';
import IconButton from '@components/button/icon-button';
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from '@components/popper/popover';
import Button from '@components/button/button';
import { fruits, person } from '@store/mock-data';
import NotificationCard from '@components/card/notification-card';
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@components/scroll-area';
import Avatar, { AvatarMore } from '@components/avatar';

const APP_BAR_HEIGHT = 60;
const NAV_BAR_WIDTH = 65;
const NOTIFICATION_HEADER_HEIGHT = 40;

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
          {/* Title */}
          <Typography weight={'bold'} variant={'h6'} css={{ color: '$grey500' }}>
            {`Chiyu Labs`}
          </Typography>
          {/* Description */}
          <Typography weight={'medium'} variant={'caption'} css={{ color: '$grey300' }}>
            {`Lab: CRA - Stitches - Radix`}
          </Typography>
        </Box>
        <Box css={{ display: 'flex', alignItems: 'center', columnGap: 20 }}>
          {/* Little bell */}
          <PopoverRoot>
            <PopoverTrigger asChild>
              <IconButton type='button' iconName='notifications' size={'medium'} />
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent sideOffset={4} align='center' css={{ height: `calc(100vh - 200px)` }}>
                <Box css={{ height: NOTIFICATION_HEADER_HEIGHT, borderBottom: '1px solid $grey100' }}></Box>
                <ScrollAreaRoot css={{ px: 10, pt: 10, height: `calc(100% - ${NOTIFICATION_HEADER_HEIGHT}px)` }}>
                  <ScrollAreaViewport>
                    {fruits.map((fruit, index) => (
                      <Fragment key={fruit.id}>
                        <NotificationCard title={fruit.name} isLast={(index + 1) % 10 === 0} />
                        <Spacer axis={'vertical'} size={10} />
                      </Fragment>
                    ))}
                  </ScrollAreaViewport>
                  <ScrollAreaScrollbar orientation='vertical'>
                    <ScrollAreaThumb />
                  </ScrollAreaScrollbar>
                  <ScrollAreaScrollbar orientation='horizontal'>
                    <ScrollAreaThumb />
                  </ScrollAreaScrollbar>
                  <ScrollAreaCorner />
                </ScrollAreaRoot>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
          {/* Avatar */}
          <PopoverRoot>
            <PopoverTrigger asChild>
              <Button type='button' shape={'cylinder'}>
                <Typography variant='button'>{`Full Name`}</Typography>
              </Button>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent sideOffset={4} align='end'>
                <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 10 }}>
                  {person.slice(0, 5).map((people, index) => (
                    <Avatar
                      key={people.id}
                      name={people.name}
                      picture={people.picture}
                      css={{ mx: 'calc(-.3rem)', zIndex: person.length - index }}
                    />
                  ))}
                  {person.slice(5).length > 0 ? (
                    <AvatarMore remainNumber={person.length - 5} css={{ mx: 'calc(-.3rem)', zIndex: 0 }} />
                  ) : null}
                </Box>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
        </Box>
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
        <NavLinkButton
          to='/selects'
          iconName='widgets'
          navName='Selects'
          title='Selects'
          glow={location.pathname === '/selects'}
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
