import Box from '@components/box';
import Icon from '@components/icon';
import Spacer from '@components/spacer';
import Typography from '@components/typography';
import IconButton from '@components/button/icon-button';

const ButtonsPage = () => {
  return (
    <Box id='buttons-container' css={{ flexGrow: 1 }}>
      {/* Page Title */}
      <Box css={{ display: 'flex', alignItems: 'center', columnGap: 10, color: '$grey50' }}>
        <Icon fill iconName='controller_gen' css={{ fontSize: 18 }} />
        <Typography variant='subtitle' weight={'medium'}>{`Buttons`}</Typography>
      </Box>
      <Spacer axis={'vertical'} size={15} />
      <Box css={{ display: 'flex', alignItems: 'center', columnGap: 10 }}>
        <IconButton type='button' isIconBold={true} iconName='close' size={'micro'} shape={'rounded'} />
        <IconButton type='button' isIconBold={true} iconName='close' size={'micro'} shape={'rounded'} glow={true} />
        <IconButton type='button' isIconFill={true} iconName='person' shape={'rounded'} variant={'outlined'} />
        <IconButton
          type='button'
          isIconFill={true}
          iconName='person'
          shape={'rounded'}
          variant={'outlined'}
          glow={true}
        />
        <IconButton type='button' iconName='credit_card' size={'small'} shape={'squared'} />
        <IconButton type='button' iconName='credit_card' size={'small'} shape={'squared'} glow={true} />
        <IconButton type='button' variant={'solid'} iconName='auto_mode' size={'medium'} shape={'rounded'} />
        <IconButton
          type='button'
          variant={'solid'}
          iconName='auto_mode'
          size={'medium'}
          shape={'rounded'}
          glow={true}
        />
      </Box>
    </Box>
  );
};

export default ButtonsPage;
