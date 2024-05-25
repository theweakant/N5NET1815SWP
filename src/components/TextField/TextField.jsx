import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import '../../pages/ProfilePage/ProfilePage.css'

export default function InputTextField({text}) {
  return (
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue={text}
        variant="filled"
        size="small"
      />
    </Stack>
  );
}
