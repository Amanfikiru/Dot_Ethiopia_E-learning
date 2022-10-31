import * as React from 'react';
//import './home.css';

import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
    <Button variant="outlined"><a href="http://localhost:3000/Registration">Register</a></Button>
    <Button variant="outlined"><a href="http://localhost:3000/Login">Login</a></Button>
    </div>
  );
}
