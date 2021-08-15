import React from 'react'
import Box from '@material-ui/core/Box';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'

const ProfileDetails = ({ location, userProfile }) => {
  const { profile } = location.state
  console.log(userProfile)
  return (
    <>
      <MyProfileBar userProfile={userProfile} style={{display: 'flex'}}/>
      <Box ml={35}>
      <h1>{profile.name}'s Deets</h1>

      </Box>

    </>
  );
}
 
export default ProfileDetails;