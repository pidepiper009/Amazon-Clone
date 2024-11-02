import { FC, FormEvent } from 'react';
import {
  Box,
  Grid2,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material';

const RegistrationFormComponent: FC = () => {

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Clicked');
  }

  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#cccccc",
        width: '350px',
        marginTop: 2,
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid2 container direction='column' justifyContent='flex-start'>
          <Typography variant='h4' component='h1'>
            Create account
          </Typography>

          <InputLabel 
            sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
            htmlFor='name'
            >Your name</InputLabel>
          
          <TextField 
            type='text' 
            name='name' 
            id='name' 
            variant='outlined' 
            size='small' 
          />

          <InputLabel 
            sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
            htmlFor='email'
            >Email</InputLabel>
          
          <TextField 
            type='text' 
            name='email' 
            id='email' 
            variant='outlined' 
            size='small' 
          />

          <InputLabel 
            sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
            htmlFor='password'
            >Password</InputLabel>
          
          <TextField 
            type='text' 
            name='password' 
            id='password' 
            variant='outlined' 
            size='small' 
            placeholder='Minimum 6 characters required'
          />

          <InputLabel 
            sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
            htmlFor='password'
            >Re-enter Password</InputLabel>
          
          <TextField 
            type='text' 
            name='password' 
            id='password' 
            variant='outlined' 
            size='small' 
            placeholder='Minimum 6 characters required'
          />

          <Button type='submit'>Register</Button>

        </Grid2>
      </form>
    </Box>
  )
}

export default RegistrationFormComponent