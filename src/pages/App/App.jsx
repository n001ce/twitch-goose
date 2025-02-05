import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import Users from '../Users/Users'
import {createTheme, ThemeProvider} from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

const theme = createTheme({
	palette:{
		primary:{
			main:'#fafafa'
		},
		secondary: orange,
	}
})

class App extends Component {
	state = {
		user: authService.getUser()
	}

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() })
	}

	render() {
		const { user } = this.state
		return (
			<>
			<ThemeProvider theme={theme}>
				<NavBar user={user} handleLogout={this.handleLogout} history={this.props.history} />
				<Route exact path='/'>
          <Landing user={user} />
        </Route>
				<Route exact path='/signup'>
          <Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        </Route>
				<Route exact path='/login'>
          <Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
				<Route 
					exact path="/users"
					render={()=> 
						user ? <Users /> : <Redirect to='/login'/>
				}/>
			</ThemeProvider>
			</>
		)
	}
}

export default App
