import React, { Component } from 'react'
import { getAllProfiles } from '../../services/profileService'
import {Box, Grid, Typography} from '@material-ui/core';
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
      <Box ml={35} mr={5} my={3}>
      <Typography variant={'h4'} >Profile List</Typography>
      <Box my={3}>
        <Grid container spacing={3}>
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
      </Box>
      </>
    );
  }
}
 
export default ProfileList;