import Box from '@components/box';
import Typography from '@components/typography';

const StatusCard = () => {
  return (
    <Box
      css={{
        borderRadius: '$5',
        height: 70,
        width: 192,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexBasis: '50%',
          backgroundColor: '$primary50',
        }}>
        <Typography variant={`body`} weight={'medium'}>{`6`}</Typography>
      </Box>
      <Box
        css={{
          flexBasis: '50%',
          backgroundColor: '$primary200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box
          css={{
            backgroundColor: '$primary700',
            width: 8,
            height: 8,
            borderRadius: '$rounded',
            mr: 4,
          }}
        />
        <Typography variant={`body`} weight={'medium'}>{`Pending`}</Typography>
      </Box>
    </Box>
  );
};

export default StatusCard;
