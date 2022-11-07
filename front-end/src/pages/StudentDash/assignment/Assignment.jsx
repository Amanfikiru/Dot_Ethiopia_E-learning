import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'There will be a Assesment while your learning Please wait ';
    }

    return 'Assesment';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '80ch',height:'80', }}>
        <OutlinedInput placeholder="Assesment" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
// import React from 'react'
// import { Assignment } from '@material-ui/icons'

// const assignment = () => {
//   return (
//     <div>
//       <h1>hiii
//         yabbyyyyyyy
//       </h1>
//     </div>
//   )
// }

// export default assignment
