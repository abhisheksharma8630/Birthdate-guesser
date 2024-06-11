import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from "@mui/material/Unstable_Grid2/";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Slide({ gridNumber, numbersArr }) {
  const numbers = numbersArr[gridNumber];
  return (
    <>
    <div className='border-2 border-gray-100 rounded-md p-3'>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 8, sm: 8, md: 17 }}
        >
        {numbersArr[gridNumber].map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Button variant='outlined' className="w-full">{_}</Button>
          </Grid>
        ))}
      </Grid>
    </div>

    </>
  );
}
