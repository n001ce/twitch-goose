import React, { Component } from 'react'
import {Button } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class MediaForm extends Component {
  state = {
    formData: {
      api_id: this.props.media.id,
      title: this.props.type === 'stream' ? this.props.media.display_name : this.props.media.name,
      img_url: this.props.type === 'stream' ? this.props.media.thumbnail_url : this.props.media.box_art_url,
      type: this.props.type,
    }
  }

  handleAddMedia = e => {
    e.preventDefault()
    this.props.handleAddMedia(this.state.formData)
  }

  handleRemoveMedia = e => {
    e.preventDefault()
    this.props.handleRemoveMedia(this.state.formData.api_id)
  }

  render() { 
    return (
      <>
        { this.props.userProfile?.media.some(media => media.api_id === parseInt(this.state.formData.api_id)) &&
          <Button size="small" variant="contained" startIcon={<RemoveCircleIcon />} onClick={this.handleRemoveMedia}>REMOVE</Button>
        }
        { !this.props.userProfile?.media.some(media => media.api_id === parseInt(this.state.formData.api_id)) &&
          <Button size="small" variant="contained" color="secondary" startIcon={<AddCircleIcon />} onClick={this.handleAddMedia}>ADD</Button>
        }
      </>
    );
  }
}
 
export default MediaForm;