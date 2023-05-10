import React from 'react'
import logo from '../../assets/sportSee-logo.png'
import { NavLink } from 'react-router-dom'

const TopNavigation = () => {
	const menuItems = [
		{ pageName: 'Accueil', link: '/' },
		{ pageName: 'Profil', link: '/profile' },
		{ pageName: 'Réglage', link: '/properties' },
		{ pageName: 'Communauté', link: '/blog' },
	]
	return (
		<nav className="navBar">
			<img src={logo} alt="sportSee logo" />
			<ul>
				{menuItems.map((item, indx) => (
					<NavLink key={indx} to={item.link}>
						<li>{item.pageName}</li>
					</NavLink>
				))}
			</ul>
		</nav>
	)
}

export default TopNavigation
