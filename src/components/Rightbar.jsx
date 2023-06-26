import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR784iw4m0CF9Vd5XbHWCEKl5xU6ws3WwhY9j6jrS6Xr2dWN7-6EidHKCiOPor2ZClrmgY&usqp=CAU"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR784iw4m0CF9Vd5XbHWCEKl5xU6ws3WwhY9j6jrS6Xr2dWN7-6EidHKCiOPor2ZClrmgY&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1rRmVplH8N8a8Ut-y5VHfNCSHJ3aPZqjvA&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1rRmVplH8N8a8Ut-y5VHfNCSHJ3aPZqjvA&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1rRmVplH8N8a8Ut-y5VHfNCSHJ3aPZqjvA&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR784iw4m0CF9Vd5XbHWCEKl5xU6ws3WwhY9j6jrS6Xr2dWN7-6EidHKCiOPor2ZClrmgY&usqp=CAU"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Letest Photos
        </Typography>
        <ImageList  cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25'
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.unsplash.com/photo-1567306301408-9b74779a11af'
                alt=""
              />
            </ImageListItem>
            
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} >
          Letest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1rRmVplH8N8a8Ut-y5VHfNCSHJ3aPZqjvA&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
