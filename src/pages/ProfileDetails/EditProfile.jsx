import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,Box, Drawer, List, CssBaseline, Typography, Divider, IconButton, Grid, TextField } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link } from 'react-router-dom'
import UserStreamCard from '../../components/UserMediaCard/UserStreamCard';
import UserGameCard from '../../components/UserMediaCard/UserGameCard';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { green } from '@material-ui/core/colors';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    arrowIcon:{
        paddingTop:'70px',
        display: 'flex',
        justifyContent: 'flex-end',
      },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    lists:{
      display:'flex',
    },
    avatar: {
      margin:'10px',
      width: '40px',
    },
    spacer: {
      margin:'10px',
      width: '40px',
    },
    listText: {
      margin:'10px',
      padding: '10px',
    },
    deleteBtn:{
        "&:hover":{
            transition: '0.5s',
            transform: 'rotateZ(90deg)',
        }
    }
  }));

const EditProfile = ({ userProfile, handleRemoveFriend, handleRemoveMedia, handleUpdateProfile }) => {

  
  const classes = useStyles();
  
  return (
    <>
<div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
      >
          <div className={classes.arrowIcon}>
          <IconButton color="inherit" aria-label="close drawer"  className={classes.menuButton}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.drawerContainer}>
          <div className={classes.lists}>
        <Avatar className={classes.avatar} alt="User Avatar" src={userProfile?.avatar} variant="rounded"/>
        <h3 className={classes.listText} >{userProfile?.name}</h3>
          </div>
          <ProfileForm userProfile={userProfile} handleUpdateProfile={handleUpdateProfile}/>

          <Divider />
          <List>
            {userProfile?.friends?.map((pl) => (
              <ListItem button key={pl._id} onClick={() => handleRemoveFriend(pl._id)}>
                <ListItemIcon > <HighlightOffIcon color="error" className={classes.deleteBtn} /> </ListItemIcon>
                <ListItemText primary={pl.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>        
        </div>
        {/* right-hand section */}
      <Box ml={40} my={3}>
      <Typography variant={'h4'} >Streamers I follow..</Typography>
      <Box my={3}>
        <Grid container spacing={3}>
        {userProfile?.media?.map(media=>
          (media.type === 'stream')? <UserStreamCard
          key={media._id}
          media={media}
          userProfile={userProfile}
          handleRemoveMedia={handleRemoveMedia}
          edit={true}/> : <Box style={{height:'280px'}}></Box>
          )}
        </Grid>
      </Box>
        <Divider/>
        <Box my={2}>
        <Typography variant={'h4'} >My Games</Typography>
        <Box my={3}>
        <Grid container spacing={3}>
        {userProfile?.media?.map(game=>
          (game.type === 'game')? <UserGameCard
          key={game._id}
          game={game}
          userProfile={userProfile}
          handleRemoveMedia={handleRemoveMedia}
          edit={true}/> : <Box style={{height:'280px'}}></Box>
          )}
          </Grid>
      </Box>
        </Box>
      </Box>

    </>
  );
}
 
export default EditProfile;