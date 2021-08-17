import React, { Component } from 'react'

class MediaForm extends Component {
  state = {
    formData: {
      api_id: this.props.type === 'stream' ? this.props.media.user_id : this.props.media.id,
      title: this.props.type === 'stream' ? this.props.media.user_name : this.props.media.name,
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
        { !this.props.userProfile?.media.some(media => media.api_id === this.state.formData.api_id) &&
          <button onClick={this.handleRemoveMedia}>REMOVE</button>
        }
        { !this.props.userProfile?.media.some(media => media.api_id === this.state.formData.api_id) &&
          <button onClick={this.handleAddMedia}>ADD</button>
        }
      </>
    );
  }
}
 
export default MediaForm;