import React, { Component } from 'react'

class ReviewForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      content: this.props.content,
      rating: this.props.rating,
    }
  }

  formRef = React.createRef();

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = e => {
		e.preventDefault();
    this.props.handleAddReview(this.state.formData)
  };
  
  render() { 
    return (
      <>
        <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >
        <button
          type="submit"
    			
        >
				  Add Review
        </button>         
      </form>
      </>
    );
  }
}
 
export default ReviewForm;