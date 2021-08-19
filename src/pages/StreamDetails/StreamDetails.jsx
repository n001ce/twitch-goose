import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import {Box, Grid, Typography, Divider,Chip } from '@material-ui/core';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import LiveBadge from '../../components/BadgeAvatar/LiveBadge';
import StarRating from '../../components/StarRating/StarRating'
import ShowStarRating from '../../components/StarRating/ShowStarRating'
import * as reviewsAPI from '../../services/reviewService'
class StreamDetails extends Component {
  state = {
    searchResult: []
  }

  async componentDidMount() {
    const { params } = this.props.match
    console.log(params)
    const searchResult = await mediaAPI.searchStreams(params.query)
    this.setState({searchResult : searchResult.data.filter(data => data.broadcaster_login === params.query)})
  }

  handleAddReview = async review => {
    const newReview = await reviewsAPI.addReview(review)
    const searchResult = this.state.searchResult
    searchResult.reviews.push(newReview)
    this.setState({ searchResult })
  }

  handleDeleteReview = async id => {
    const deletedReview = await reviewsAPI.deleteReview(id)
    const reviewIdx = this.state.searchResult.reviews.findIndex(review => review._id === deletedReview._id)
    const searchResult = this.state.searchResult
    searchResult.reviews.splice(reviewIdx, 1)
    this.setState({ searchResult })
  }


  render() {
    const { searchResult } = this.state
    return (
      <>
      <MyProfileBar userProfile={this.props.userProfile} style={{display: 'flex'}}/>
      <Box ml={32} mr={5} my={3}>
      {searchResult.map(stream =>
        <>
        <LiveBadge live={stream.is_live} name={stream.broadcaster_login}/>
        <Box ml={5} mt={3}>
        <Grid container spacing={3}>
        <Grid item md={6} lg={6} mx={'auto'} >
        <Box mb={2} >
        <img className='img-responsive' src={stream.thumbnail_url} alt={stream.name}/>
        </Box>

        </Grid>
        <Grid item md={6} lg={6} mx={'auto'} >
        <Box mt={2} >
        <Typography variant={'h5'} display={'inline'}>Language: </Typography>
        <Chip label={stream.broadcaster_language} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Game Streaming: </Typography>
        <Chip label={stream.game_name} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Live: </Typography>
        <Chip label={stream.is_live ? "yes" : "no"} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Stream Title: </Typography>
        <Chip label={stream.title} color="secondary" variant="outlined" />

        </Box>
        {stream.started_at? 
        <Box mt={1} mb={2}>
        <Typography variant={'h5'}>Stream Started at: </Typography>
        <Chip label={stream.started_at} color="secondary" variant="outlined" />

        </Box>
        :<></>}
        </Grid>
        </Grid>
        </Box>

        </>
      )}
              <Divider/>
              <Box m={1}>

              <Typography variant={'h5'}>Reviews</Typography>
        
            <StarRating
              api={searchResult[0]}
              author={this.props.userProfile_id}
              handleAddReview={this.handleAddReview}
              media_id={searchResult._id}
            />
           </Box>

      </Box>
      </>
    );
  }
}
 
export default StreamDetails;