import { Box ,Typography} from '@mui/material';
export default function Heading() {
  return (
    <Box component="header" display="flex" alignItems="center" justifyContent="space-between" width="500px">
        <Typography variant='h1'>TODO</Typography>
        <figure>
            <img src='/images/icon-sun.svg' alt='image for sun'/>
            <figcaption>Image for Sun</figcaption>
        </figure>
    </Box>
   
  )
}
