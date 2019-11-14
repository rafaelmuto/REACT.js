import React from 'react';

import style from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = props => {
	//...
	return (
		<div className={style.SideDrawer}>
			<Logo height="11%" style={{ marginBotton: '32px' }} />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default sideDrawer;
