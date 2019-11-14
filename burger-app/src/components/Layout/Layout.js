import React from 'react';

import style from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
	return (
		<Aux>
			<Toolbar />
			<SideDrawer />
			<main className={style.Content}>{props.children}</main>
		</Aux>
	);
};

export default layout;
