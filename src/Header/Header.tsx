import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

interface HeaderProps {
	loggedIn: boolean;
	setLoggedIn: any;
}

const Header: React.SFC<HeaderProps> = props => {

	const logoutUser = () => {
		props.setLoggedIn(false);
	}

	return (
		<header>
			{!props.loggedIn && 
				<Link to='/'>
					<h1 className='app-title'>Spirited Quarantini</h1>
				</Link>
			}

			{props.loggedIn && 
				<div className='user-header'>
					<Link to='/dashboard'>
						<h1 className='app-title'>Spirited Quarantini</h1>
					</Link>

					<form className='search-bar'>
						<input
							type="text"
							name="search"
							placeholder="search cocktails..."
							className="header-search"
							// value={searchInput}
							// onChange={(e) => updateSearchInput(e.target.value)}
							aria-label="search"
						/>
						<Link to='/results'>
							<button className="header-search-button">
								Search
							</button>
						</Link>
					</form>

				<section className='navlinks'>
					<Link to='/about'>
						<h3 className='navlink-title'>About</h3>
					</Link>
					<Link to='/cocktails'>
						<h3 className='navlink-title'>Cocktails</h3>
					</Link>
					<Link to='/my_cocktails'>
						<h3 className='navlink-title'>My Cocktails</h3>
					</Link>
					<Link to='/'>
						<button
							onClick={logoutUser}
						>
							Logout
						</button>
					</Link>
				</section>
				</div>
			}

		</header>
	)
}

export default Header;