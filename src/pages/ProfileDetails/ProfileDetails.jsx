import React from 'react'

const ProfileDetails = ({ location, userProfile }) => {
  const { profile } = location.state
  return (
    <>
      <h1>{profile.name}'s Deets</h1>

    </>
  );
}
 
export default ProfileDetails;