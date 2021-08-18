import React, { Component } from 'react'
import {Avatar,Box, ListItemIcon, List, ListItem, ListItemText, Typography, Divider, Button, Grid, TextField } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'


class ProfileForm extends Component {
    state = {
        avatar: '',
      }

    handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('check')
      }

render() {
    return(
     <>
        <List>
            <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            >
              <ListItem key={1}>
                <ListItemIcon>Avatar </ListItemIcon>
                <TextField id="outlined-basic" label="Avatar url" variant="outlined"
                name="avatar"
                defaultValue={this.props.userProfile?.avatar}
                onChange={this.handleChange}
                 />
              </ListItem>
              <ListItem button key={2} type="submit">
                {/* <ListItemIcon><DoneOutlineIcon style={{ color: green[500] }}/></ListItemIcon>
                <ListItemText style={{ color: green[500] }} primary='Save Profile'/> */}
                <Button size="small" variant="contained" color="secondary" startIcon={<DoneOutlineIcon />} fullWidth={true} type='submit'> Save Profile</Button> 
              </ListItem>
              </form>
          </List>
          </>

)
}
}
export default ProfileForm;