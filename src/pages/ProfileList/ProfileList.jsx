import React, { Component } from 'react'
import { getAllProfiles } from '../../services/profileService'
import {Box, Grid} from '@material-ui/core';
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
      <MyProfileBar userProfile={this.props.userProfile} />
      <Box ml={35} mr={5}>
        <h1>Profile List</h1>
        <Grid container spacing={1}>
        {this.state.profiles.map(profile => 
        <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
          <ProfileCard
            profile={profile}
            key={profile._id}
            userProfile={this.props.userProfile}
            handleAddFriend={this.props.handleAddFriend}
            handleRemoveFriend={this.props.handleRemoveFriend}
          />
        </Grid>
        )}
        </Grid>
      </Box>
      </>
    );
  }
}
 
export default ProfileList;