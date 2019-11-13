import React from 'react';

import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = props => {
	return (
		<div className={style.BuildControls}>
			<p>
				Current price: <strong>{props.price.toFixed(2)}</strong>
			</p>
			{controls.map(ctrl => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdded(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<button className={style.OrderButton} disabled={!props.purchasable} onClick={props.order}>
				ORDER NOW!
			</button>
			<a
				onClick={props.reset}
				style={{ marginTop: '.5rem', padding: '0 .5rem', border: '1px solid black', borderRadius: '2px' }}
			>
				reset
			</a>
		</div>
	);
};

export default buildControls;
