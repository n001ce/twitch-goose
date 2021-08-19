import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'
import {Box, Grid, Card, Typography, Divider,TextField } from '@material-ui/core';


class LoginForm extends Component {
  state = {
    email: '',
    pw: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props
    e.preventDefault()
    try {
      await authService.login(this.state);
      handleSignupOrLogin()
      history.push("/")
    } catch (err) {
        alert('Invalid Credentials')
    }
  }

  render() {
    const { email, pw } = this.state
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <TextField
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            label="Outlined"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <TextField
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
            label="Outlined"
          />
        </div>
        <div>
          <button className={styles.button}>Log In</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    )
  }
}

export default LoginForm
