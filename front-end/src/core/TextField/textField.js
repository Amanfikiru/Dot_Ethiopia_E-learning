import * as React from 'react';
import './textField.css';
import { TextField } from '@mui/material';


export default function TextBox(props) {
  return (
    <div className="form">
   <TextField label={props.label} variant="outlined" style={{width:'100%'}} />
  </div>
  );
}
