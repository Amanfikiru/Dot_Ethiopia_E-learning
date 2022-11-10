import { useState } from 'react';
import { Modal,TextInput, Box, Button } from '@mantine/core';
import Head from '../../components/header/Head';
import Hero from '../Homepage/hero/Hero';
import Testimonal from '../Testimonalpage/Testimonal';
import AboutCard from '../Aboutpage/AboutCard';
import CoursesCard from '../Coursespage/CoursesCard';
import AuthAdmin from './AuthAdmin';
export default function LoginAdmin() {
        const {http,setToken} = AuthAdmin();
        const [email,setEmail] = useState();
        const [password,setPassword] = useState();
    
        const submitForm = () =>{
            // api call
            http.post('/login',{email:email,password:password}).then((res)=>{
                setToken(res.data.user,res.data.access_token);
            })}
  const [opened, setOpened] = useState(true);

  return (
  
  <>
<Hero />
  

  <AboutCard />
  <CoursesCard />
  <Testimonal />
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Insert your information"
      >
        <Box sx={{ maxWidth: 400 }} mx="auto">
      
        <TextInput
          label="Email"
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          mt="md"
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={submitForm} mt="md">
          Login
        </Button>
        {/* <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button> */}
      {/* {submittedValues && <Code block>{submittedValues}</Code>} */}
    </Box>
        
      </Modal>
      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group> */}
    </>
  )
}
