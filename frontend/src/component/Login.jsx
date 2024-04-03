import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
const navigate = useNavigate();
    const handleEmail=(event)=>{
        setEmail(event.target.value);
      };
      const handlePassword=(event)=>{
        setPassword(event.target.value);
      };
      const handleSubmit = async (event)=>{
        const email=Email;
        event.preventDefault()
          try{
          const display =await axios.post('http://localhost:4000/login',{Email, Password})
          console.log(display.data)
          navigate(`/view/${email}`);
        }
          catch(error){
            console.error(error);
          }
      }
  return (
    <div>
      <Form onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'5% 30%',border:'1px solid black'}}>
     <h4>Login Here</h4>
<Form.Group className="mb-3" controlId="formBasicemail">
  <Form.Label>Email</Form.Label>
  <Form.Control
  type="text"
  placeholder="Enter your email"
  value={Email}
  onChange={handleEmail}
  required
 
  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicname">
  <Form.Label>Password</Form.Label>
  <Form.Control
  type="text"
  placeholder="Enter password"
  value={Password}
  onChange={handlePassword}
  required
 
  />
</Form.Group>


<Button 
type="submit"  variant="dark">
Login
</Button>
</Form>
    </div>
  )
}

export default Login
