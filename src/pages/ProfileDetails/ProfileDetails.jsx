import React from 'react'
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'

const ProfileDetails = ({ location, userProfile }) => {
  const { profile } = location.state
  console.log(userProfile)
  return (
    <>
      <MyProfileBar userProfile={userProfile} style={{display: 'flex'}}/>
      <h1>{profile.name}'s Deets</h1>

    </>
  );
}
 
export default ProfileDetails;