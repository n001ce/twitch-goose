import React, { Component } from 'react'

import SearchBar from './SearchBar';

class Search extends Component {
  state = {
    invalidForm: true,
		formData: {
      query: '',
			type: ''
		},
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
    this.props.history.push(`/search/${this.state.formData.type}s/byName/${this.state.formData.query}`)
  };
  
  render() {
    return (
      <>
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >
      <SearchBar state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </form>
      </>
    )
  }
}

export default Search