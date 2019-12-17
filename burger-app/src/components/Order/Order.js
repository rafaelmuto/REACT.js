import React from 'react';

import style from './Order.module.css';

const order = props => (
	<div className={style.Order}>
		<p>Ingredients: </p>
		<p>
			Price: <strong>$5.55</strong>
		</p>
	</div>
);

export default order;
