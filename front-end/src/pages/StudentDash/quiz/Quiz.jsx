import React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function MyFormHelperText() {
     const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'There will be a Quize while your learning Please wait ';
    }

    return 'Quiz';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
  export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '80ch',height:'80', }}>
        <OutlinedInput placeholder="Quiz" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
  }

//export default Quiz





// import React from 'react';
// import Chatbot from 'react-chatbot-kit'

// import ActionProvider from '../chat/ActionProvider';
// import MessageParser from './MessageParser';
// import config from './config';

// function Quiz() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
//       </header>
//     </div>
//   );
// }
// export default Quiz;
// import React from 'react'
// import ChatBot from 'react-simple-chatbot';
// import {segment} from 'semantic-ui-react';

// function Quiz(){
//     const steps=[
//         {

//       id: "Greet",

//       message: "Hello, Welcome to our shop",

//       trigger: "Done",

//     },

//     {

//       id: "Done",

//       message: "Please enter your name!",

//       trigger: "waiting1",

//     },

//     {

//       id: "waiting1",

//       user: true,

//       trigger: "Name",

//     },

//     {

//       id: "Name",

//       message: "Hi {previousValue}, Please select your issue",

//       trigger: "issues",

//     },

//     {

//       id: "issues",

//       options: [

//         {

//           value: "Start-up",

//           label: "Start-up",

//           trigger: "Start-up",

//         },

//         { value: "Women-empowerment", label: "Women-empowerment", trigger: "Women-empowerment" },
// {
    
//           value: "Reach-up",

//           label: "Reach-up",

//           trigger: "Reach-up",
// }
//       ],

//     },

//     {

//       id: "Start-up",

//       message:

//         "Thanks for letting your start-up  course issue, Our team will resolve your issue ASAP",

//       end: true,

//     },

//     {

//       id: "Women-empowerment",

//       message:

//         "Thanks for letting your Women-empowerment course issue, Our team will resolve your issue ASAP",

//       end: true,

//     },
//     {

//       id: "Reach-up",

//       message:

//         "Thanks for letting your Reach-up course issue, Our team will resolve your issue ASAP",

//       end: true,

//     },
//     ]

//   return (
//     <>
//       <Segment floated="center"> 
//       <ChatBot steps={steps} />
//       </Segment>
//     </>
//   );
//   }

// export default Quiz;
