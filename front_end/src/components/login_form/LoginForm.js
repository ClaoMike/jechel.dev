import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Stack from '@mui/material/Stack';
import { STRINGS } from 'Components';

import style from './LoginFormStyle';

const LoginForm = () => {
  return (
    <Stack direction="column" spacing={2} style={style.stack}>
        <TextField 
          id="standard-basic" 
          label={STRINGS.admin.login_page.username_label} 
          variant="standard" 
          style={style.username}
        />
        <TextField 
          id="standard-basic" 
          label={STRINGS.admin.login_page.password_label} 
          variant="standard" 
          type="password" 
          autoComplete="current-password" 
          style={style.password}
        />
        <Button 
          variant="contained" 
          endIcon={<VpnKeyIcon />}
        >
          {STRINGS.admin.login_page.login_button_label}
        </Button>
    </Stack>
  )
}

export default LoginForm