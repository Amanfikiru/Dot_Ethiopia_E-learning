// import React from 'react'

// const Explore = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Explore
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
//import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
  <div>
    <h1>Hello welcome Explore and know about the course you want to Learn !!!</h1>
    <br/>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search courses"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 18, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  
</div>

  <Card sx={{ maxWidth: 385 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Women Empowerment"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://blog.ipleaders.in/wp-content/uploads/2021/01/img-20190306-5c7f72b3a4ca1.jpg"
        alt="Women-Empowerment"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Women's empowerment can be defined to promoting women's 
         sense of self-worth, their ability to determine their own choices, and their right to 
         influence social change for themselves and others.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
             Women's empowerment has five components: women's sense of self-worth; their right to have and to determine choices; their right to have access to opportunities and resources; their right to have power to control their own lives, both within and outside the home; 
           and their ability to influence the direction of social
          </Typography>
          <Typography paragraph> How can we empower women?:</Typography>
          <Typography paragraph>
            Women's empowerment has five components: women's sense of self-worth; their right to have and to determine choices; their right to have access to opportunities and resources; their right to have power to control their own lives, both within and outside the home; 
           and their ability to influence the direction of social
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


  <Card sx={{ maxWidth: 385 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Start-up"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://static.businessworld.in/article/article_extra_large_image/1643695558_GFjhTN_startup.jpeg"
        alt="Start-up"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Startups are young companies founded to develop a unique product or service, bring it to market and make
          it irresistible and irreplaceable for customers.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
           Startups are young companies founded to develop a unique product or service, bring it to market and
            make it irresistible and irreplaceable for customers
          </Typography>
          <Typography paragraph> How can we start a bussiness?:</Typography>
          <Typography paragraph>
           Startups are young companies founded to develop a unique product or service, bring it to market and make it irresistible and irreplaceable for customers
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
 
  </>
);
}

