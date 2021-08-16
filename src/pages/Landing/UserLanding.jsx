import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography, Divider } from '@material-ui/core';
import GameCard from '../../components/GameCard/GameCard';


const UserLanding = ({userProfile, location}) => {

  return (
    <>
        <MyProfileBar userProfile={userProfile} />
        <Box ml={35} mr={5} my={3}>
        <Typography variant={'h4'} >Streamers I follow..</Typography>
        <Box style={{height:'280px'}}>
        
        </Box>
        <Divider/>
        <Box my={2}>
        <Typography variant={'h4'} >My Games</Typography>
        {userProfile?.streamers?.map(streamer=>
          <GameCard
          key={streamer._id}
          streamer={streamer}
          userProfile={userProfile}/>
        )}
        </Box>
        </Box>
    </>
  )
}
 
export default UserLanding