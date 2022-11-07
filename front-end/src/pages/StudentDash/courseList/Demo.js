import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://static.businessworld.in/article/article_extra_large_image/1643695558_GFjhTN_startup.jpeg',
    title: 'Start-up Course',
    width: '800%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVk6WCzbC4qDtrnt27nZ_oiTyiQCfZRD-YQ&usqp=CAU',
    title: 'Women Empowerment Course',
    width: '500%',
  },
  {
    url: 'https://reachhigher.co.il/wp-content/uploads/2020/04/%D7%A8%D7%99%D7%A6-%D7%94%D7%A4-scaled.jpg',
    title: 'Reach-up Course',
    width: '500%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'center',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '200% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 20,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 100,
  right: -50,
  top: 10,
  bottom: 10,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'right',
  left: 50,
  right: 80,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 100,
  right: -50,
  top: 10,
  bottom: 10,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';

// const images = [
//   {
//     url: 'https://static.businessworld.in/article/article_extra_large_image/1643695558_GFjhTN_startup.jpeg',
//     title: 'Breakfast',
//     width: '500%',
//   },
//   {
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVk6WCzbC4qDtrnt27nZ_oiTyiQCfZRD-YQ&usqp=CAU',
//     title: 'women empowerment',
//     width: '500%',
//   },
//   {
//     url: 'https://reachhigher.co.il/wp-content/uploads/2020/04/%D7%A8%D7%99%D7%A6-%D7%94%D7%A4-scaled.jpg',
//     title: 'Camera',
//     width: '500%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'right',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: 500,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 20,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'right',
//   left: 100,
//   right: -50,
//   top: 10,
//   bottom: 10,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 5%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'right',
//   left: 20,
//   right: 50,
//   top: 80,
//   bottom: 80,
//   display: 'flex',
//   alignItems: 'right',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 100,
//   right: -50,
//   top: 10,
//   bottom: 10,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 38,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 10px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';

// const images = [
//   {
//     url: 'https://static.businessworld.in/article/article_extra_large_image/1643695558_GFjhTN_startup.jpeg',
//     title: 'Start-UP',
//     width: '100%',
//   },
//   {
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVk6WCzbC4qDtrnt27nZ_oiTyiQCfZRD-YQ&usqp=CAU',
//     title: 'Women Empowerment',
//     width: '100%',
//   },
//   {
//     url: 'https://reachhigher.co.il/wp-content/uploads/2020/04/%D7%A8%D7%99%D7%A6-%D7%94%D7%A4-scaled.jpg',
//     title: 'Reach-up',
//     width: '100%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 350,
//   [theme.breakpoints.down('sm')]: {
//     width: '300% !important', // Overrides inline-style
//     height: 300,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 20,
//   right:0,
//   top: 10,
//   bottom: 10,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 100%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 20,
//   right: 20,
//   top: 20,
//   bottom: 10,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }