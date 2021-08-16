import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import UserLanding from '../Landing/UserLanding'
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'
import ProfileList from '../ProfileList/ProfileList'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import GameIndex from '../GameSearch/GameIndex'
import {createTheme, ThemeProvider} from '@material-ui/core'
import { orange } from '@material-ui/core/colors'


const theme = createTheme({
	palette:{
		primary:{
			main:'#fafafa'
		},
		secondary: orange,
	},
	zIndex: {
		appBar: 1251,
		modal: 1250,
		drawer: 1200,
	  }
})

class App extends Component {
	state = {
		user: authService.getUser(),
		userProfile: null
	}

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null, userProfile: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = async () => {
		this.setState({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}

	handleAddFriend = async friendId => {
		const updatedProfile = await profileAPI.friend(friendId)
		this.setState({ userProfile: updatedProfile })
	}

	handleRemoveFriend = async friendId => {
		const updatedProfile = await profileAPI.unfriend(friendId)
		this.setState({ userProfile: updatedProfile })
	}

	async componentDidMount() {
		if (!this.state.userProfile){
			const userProfile = await profileAPI.getUserProfile()
			this.setState({ userProfile })
		}
	}

	render() {
		const { user, userProfile } = this.state
		return (
			<>
			<ThemeProvider theme={theme}>
				<NavBar user={user} handleLogout={this.handleLogout} history={this.props.history} />
				<Route exact path='/'
					render={()=> 
						authService.getUser() ? 
						<Redirect to='/landing'
							userProfile={userProfile}
						/> :
          			<Landing user={user} />
        		}/>
				<Route exact path='/landing'>
          			<UserLanding userProfile={userProfile}/>
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
						authService.getUser() ? 
						<ProfileList
							userProfile={userProfile}
							handleAddFriend={this.handleAddFriend}
							handleRemoveFriend={this.handleRemoveFriend}
						/>
						 : <Redirect to='/login'/>
				}/>
				<Route 
					exact path='/profile'
					render={({ location })=> 
						authService.getUser() ?
						<ProfileDetails 
							location={location}
							userProfile={userProfile}
						/> : <Redirect to='/login' />
					}
				/>
				<Route 
					exact path='/search/games/:query'
					render={({ match })=> 
						<GameIndex
							match={match}
							userProfile={userProfile}
						/>
					}
				/>
				
			</ThemeProvider>
			</>
		)
	}
}

export default App
