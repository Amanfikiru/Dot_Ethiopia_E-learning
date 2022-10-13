import * as React from 'react';
import './register.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextBox from '../../core/TextField/textField';


export default function Register() {
  return (
    
    <div className="card">
    <Card className="cardStyle" >
    <CardContent>
        <div className="signupText">WELCOME !!!</div>
        <TextBox label="First Name"/>
        <TextBox label="Last Name"/>
        <TextBox label="Address"/>
        <TextBox label="Age"/>
        <TextBox label="Email"/>
        <TextBox label="Phone_Number"/>
        <TextBox label="Level_of_study"/>
        <TextBox label="Password"/>
        <TextBox label="Confirm Password"/>
    </CardContent>

    <CardActions className="CardActions" >
        <Button style={{background:'Black',color:'white'}}> SIGNUP</Button>
    </CardActions>
    
    </Card>
</div>
  );
}
