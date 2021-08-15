import React, { Component } from 'react'
import { getAllProfiles } from '../../services/profileService'
import Box from '@material-ui/core/Box';
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'


class ProfileList extends Component {
  state = {
    profiles: []
  }

  async componentDidMount() {
    const profiles = await getAllProfiles()
    this.setState({ profiles })
  }

  render() { 
    return (
      <>
      <MyProfileBar userProfile={this.props.userProfile} style={{display: 'flex'}}/>
      <Box ml={35}>
        <h1>Profile List</h1>
        {this.state.profiles.map(profile => 
          <ProfileCard
            profile={profile}
            key={profile._id}
            userProfile={this.props.userProfile}
            handleAddFriend={this.props.handleAddFriend}
            handleRemoveFriend={this.props.handleRemoveFriend}
          />
        )}

      </Box>
      </>
    );
  }
}
 
export default ProfileList;