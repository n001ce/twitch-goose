import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography, Divider } from '@material-ui/core';
import UserGameCard from '../../components/GameCard/UserGameCard';


const UserLanding = ({userProfile, location}) => {

  return (
    <>
        <MyProfileBar userProfile={userProfile} />
        <Box ml={35} mr={5} my={3}>
        <Typography variant={'h4'} >Streamers I follow..</Typography>
        <Box my={3}>
        <Grid container spacing={3}>
        {userProfile?.media?.map(media=>
          (media.type === 'game')? <UserGameCard
          key={media._id}
          game={media}
          userProfile={userProfile}/> : <Box style={{height:'280px'}}></Box>
          )}
        </Grid>
      </Box>
        <Divider/>
        <Box my={2}>
        <Typography variant={'h4'} >My Games</Typography>
        {userProfile?.media?.map(media=>
          (media.type === 'game')? <UserGameCard
          key={media._id}
          game={media}
          userProfile={userProfile}/> : <div></div>
          )}
        </Box>
        </Box>
    </>
  )
}
 
export default UserLanding