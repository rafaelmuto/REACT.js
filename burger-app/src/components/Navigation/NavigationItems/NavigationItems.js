import React from 'react';

import style from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
	return (
		<ul className={style.NavigationItems}>
			<NavigationItem link="/">Burger Builder</NavigationItem>
			<NavigationItem link="/Orders">Orders</NavigationItem>
		</ul>
	);
};

export default navigationItems;
