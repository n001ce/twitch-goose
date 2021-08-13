import React from 'react'
import { Link } from 'react-router-dom'
import PrimarySearchAppBar from './PrimarySearchAppBar'

const NavBar = ({ user, handleLogout, history }) => {
	return (
		<>
			<PrimarySearchAppBar user={user} history={history} handleLogout={handleLogout}/>
		</>
	)
}

export default NavBar
