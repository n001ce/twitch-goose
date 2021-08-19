import React, { Component } from 'react'
import {Button } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class ReviewForm extends Component {
  state = {
    formData: {
      media: this.props.media.id,
      author: this.props.userProfile,
      rating: this.props.rating,
      content: this.props.content,
    }
  }

  handleCreateReview= e => {
    e.preventDefault()
    this.props.handleCreateReview(this.state.formData)
  }

  render() { 
    return (
      <>
      
          <Button size="small" variant="contained" startIcon={<RemoveCircleIcon />} onClick={this.handleCreateReview}>Add Review</Button>
             </>
    );
  }
}
 
export default ReviewForm;