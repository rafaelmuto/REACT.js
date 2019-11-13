import React from 'react';

import style from './Logo.module.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props => {
	return (
		<div className={style.Logo}>
			<img src={burgerLogo} alt="React Burger!" />
		</div>
	);
};

export default logo;
