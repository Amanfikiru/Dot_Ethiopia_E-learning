import * as React from 'react';
import './login.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextBox from '../../core/TextField/textField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Login() {
  return (
    
    <div className="card">
    <Card className="cardStyle" >
    <CardContent>
        <div className="signupText"><Typography variant="h4" >
        Log In
      </Typography>
      </div>
        
        <TextBox label="Email"/>
        <TextBox label="Password"/>

    </CardContent>


    <CardActions className="CardActions" >
        <Button style={{background:'black',color:'white'}}> LOGIN</Button>
    </CardActions>

    <CardContent className="cardContent"  >
    <Typography variant="body1" >
        Didn't have account yet ?
      </Typography>
    <Link href="/Registration" underline="none" variant="button">
        REGISTER
      </Link>
  </CardContent>
    </Card>
</div>
  );
}
