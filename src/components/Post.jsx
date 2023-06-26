import {  Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardHeader, CardMedia, Checkbox,  IconButton } from '@mui/material'
import data from './data';

const Post = () => {
  return (
    
      data.map((currElem) =>{
        return(
          <Card sx={{margin: 5}} >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={currElem.title}
            subheader={currElem.subheader}
          />
          <CardMedia
            component="img"
            height="20%"
            image={currElem.image}
            alt="Paella dish"
          />
         
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>} />
            </IconButton>
            <IconButton aria-label="share">
              <Share/>
            </IconButton>
          </CardActions>
          
        </Card>
        )
      })
    
    

    
  )
}

export default Post
