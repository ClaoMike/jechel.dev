import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Stack from '@mui/material/Stack';
import { STRINGS } from 'Components';
import style from './LoginFormStyle';

import FormControl, { useFormControl } from '@mui/material/FormControl';

import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  // const { focused } = useFormControl() || {};

  // const handleUsernameFocus = () => {
  //   console.log("hey");
  // };
  
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("firstName")} placeholder="Username" />
      <input {...register("firstName")} placeholder="Password" />
 
      <input type="submit" value="Login" />
    </form>
    // <FormControl>
    //   <Stack direction="column" spacing={2} style={style.stack}>

    //     <TextField 
    //       id="standard-basic" 
    //       label={STRINGS.admin.login_page.username_label} 
    //       variant="standard" 
    //       style={style.username}
    //       onFocus={handleUsernameFocus}
    //       color="secondary"
    //     />

    //     <TextField 
    //       id="standard-basic" 
    //       label={STRINGS.admin.login_page.password_label} 
    //       variant="standard" 
    //       type="password" 
    //       autoComplete="current-password" 
    //       style={style.password}
    //     />

    //     <Button 
    //       variant="contained" 
    //       endIcon={<VpnKeyIcon />}
    //     >
    //       {STRINGS.admin.login_page.login_button_label}
    //     </Button>

    //   </Stack>
    // </FormControl>
  )
}

export default LoginForm