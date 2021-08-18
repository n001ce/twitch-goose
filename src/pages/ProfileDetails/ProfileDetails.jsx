import React from 'react'
import {Box, Grid, Typography, Divider } from '@material-ui/core';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import UserStreamCard from '../../components/UserMediaCard/UserStreamCard';
import UserGameCard from '../../components/UserMediaCard/UserGameCard';
import BadgeAvatar from '../../components/BadgeAvatar/BadgeAvatar';
import ProfileAvatarCard from '../../components/ProfileCard/ProfileAvatarCard';

const ProfileDetails = ({ location, userProfile }) => {
  const { profile } = location.state

  return (
    <>
      <MyProfileBar userProfile={userProfile} style={{display: 'flex'}}/>
      <Box ml={35} mr={5} my={3}>
      <ProfileAvatarCard url={profile.avatar} live={true} name={profile.name} />
      <Typography variant={'h5'} >Streamers {profile.name} follows</Typography>
        <Box my={3}>
        <Grid container spacing={3}>
        {profile?.media?.map(media=>
          (media.type === 'stream')? <UserStreamCard
          key={media._id}
          media={media}
          // userProfile={userProfile}
          edit={false}/> : <Box style={{height:'280px'}}></Box>
          )}
        </Grid>
      </Box>
        <Divider/>
        <Box my={2}>
        <Typography variant={'h5'} >{profile.name}'s' Games</Typography>
        <Box my={3}>
        <Grid container spacing={3}>
        {profile?.media?.map(game=>
          (game.type === 'game')? <UserGameCard
          key={game._id}
          game={game}
          userProfile={userProfile}
          edit={false}/> : <Box style={{height:'280px'}}></Box>
          )}
          </Grid>
      </Box>
        </Box>
      </Box>

    </>
  );
}
 
export default ProfileDetails;