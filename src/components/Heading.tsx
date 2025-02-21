import { Box ,Typography,Stack} from '@mui/material';

export default function Heading() {
  return (
    <Stack component="header" direction="row"  alignItems="center" justifyContent="space-between" width="500px">
        <Typography variant='h1'>TODO</Typography>
        <Box component="figure">
          <Box component="img" src={process.env.PUBLIC_URL + '/images/icon-sun.svg'} alt='image for sun'></Box>
        </Box>
    </Stack>
   
  )
}
