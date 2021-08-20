import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import {Box, Grid, Typography, Divider,Chip } from '@material-ui/core';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import LiveBadge from '../../components/BadgeAvatar/LiveBadge';
import StarRating from '../../components/StarRating/StarRating'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import * as reviewsAPI from '../../services/reviewService'
class StreamDetails extends Component {
  state = {
    searchResult: [{}],
  }

  async componentDidMount() {
    const { params } = this.props.match
    let searchResult = await mediaAPI.searchOneStream(params.query, params.id)
    this.setState({searchResult})
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
    this.setState({ searchResult : searchResult.response })
  }


  render() {
    const { searchResult } = this.state
    return (
      <>
      <MyProfileBar userProfile={this.props.userProfile} style={{display: 'flex'}}/>
      <Box ml={32} mr={5} my={3}>
        <>
        <LiveBadge live={searchResult.is_live} name={searchResult.broadcaster_login}/>
        <Box ml={5} mt={3}>
        <Grid container spacing={3}>
        <Grid item md={6} lg={6} mx={'auto'} >
        <Box mb={2} >
        <img className='img-responsive' src={searchResult.thumbnail_url} alt={searchResult.name}/>
        </Box>

        </Grid>
        <Grid item md={6} lg={6} mx={'auto'} >
        <Box mt={2} >
        <Typography variant={'h5'} display={'inline'}>Language: </Typography>
        <Chip label={searchResult.broadcaster_language} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Game Streaming: </Typography>
        <Chip label={searchResult.game_name} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Live: </Typography>
        <Chip label={searchResult.is_live ? "yes" : "no"} color="secondary" variant="outlined" />
        </Box>
        <Box mt={1} >
        <Typography variant={'h5'} display={'inline'}>Stream Title: </Typography>
        <Chip label={searchResult.title} color="secondary" variant="outlined" />

        </Box>
        {searchResult.started_at? 
        <Box mt={1} mb={2}>
        <Typography variant={'h5'}>Stream Started at: </Typography>
        <Chip label={searchResult.started_at} color="secondary" variant="outlined" />

        </Box>
        :<></>}
        </Grid>
        </Grid>
        </Box>

        </>
              <Divider/>
              <Box m={1}>

              <Typography variant={'h5'}>Reviews</Typography>
              {(searchResult.reviews?.length > 0) &&
        <>
          <h3>Reviews:</h3>
          {searchResult.reviews?.map(review =>
            <ReviewCard
              userProfile={this.props.userProfile}
              review={review}
              handleDeleteReview={this.handleDeleteReview}
              />
              )}
        </>
        }
        { !searchResult.reviews?.some(review => review.author._id === this.props.userProfile._id) &&
          this.props.userProfile?.media.some(media => media._id === searchResult?._id) &&
          <>
            <StarRating
              api={this.props.match.params.id}
              media={searchResult._id}
              userProfile={this.props?.userProfile?._id}
              handleAddReview={this.handleAddReview}
            />
            
          </>
        }
        
          <>
             
          </>
              
           </Box>

      </Box>
      </>
    );
  }
}
 
export default StreamDetails;