import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
   
    const [Place, setPlace] = useState('')
    const [Phone, setPhone] = useState('')
    const [Profile, setProfile] = useState('')
    const [Password, setPassword] = useState('')
    const ispasswordValid = (event)=>{
        return Password.length >=6;
      };
      const handleName=(event)=>{
        setName(event.target.value);
      };
      const handleEmail=(event)=>{
        setEmail(event.target.value);
      };
      const handlePassword=(event)=>{
        setPassword(event.target.value);
      };
      const handlePlace=(event)=>{
        setPlace(event.target.value);
      };
      const handlePhone=(event)=>{
        setPhone(event.target.value);
      };
      const handleProfile=(event)=>{
        setProfile(event.target.value);
      };
      const handleSubmit =async(event)=>{
        const email = Email;
          event.preventDefault()
          try{
          const display =await axios.post('http://localhost:4000/Signupclient',{Name,Email, Password,Place,Phone,Profile})
          console.log(display.data)
          navigate(`/view/${email}`);
        }
          catch(error){
            console.error(error);
          }
        }
  return (
    <div>
        <Form onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'1% 20%',border:'1px solid black'}}>
      <h5>Create your Account</h5>
<Form.Group className="mb-3" controlId="formBasicemail" >
      <Form.Label>Name</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your name"
      value={Name}
      onChange={handleName}
      required
    
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail" >
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={Email}
      onChange={handleEmail}
      required
      
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicname" >
      <Form.Label>password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={Password}
      onChange={handlePassword}
      required
      
      />
    </Form.Group>

  

<Form.Group className="mb-3" controlId="formBasicname" >
      <Form.Label>Place</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your place"
      value={Place}
      onChange={handlePlace}
      required
     
      />
    </Form.Group>

<Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Phone</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your number"
      value={Phone}
      onChange={handlePhone}
      required
     
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Add profile photo</Form.Label>
      <Form.Control
      type="text"
      placeholder="Add image"
      value={Profile}
      onChange={handleProfile}
      required

      />
      </Form.Group>
     
    <Button type="submit" variant="dark">Create</Button>
    </Form>
    </div>
      
  )
}

export default Signup
