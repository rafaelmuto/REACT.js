import React from 'react';

import Button from '../../UI/Button/Button';

import style from './OrderSummary.module.css';

const orderSummary = props => {
	const ingredientsSummary = Object.keys(props.ingredients).map(ingredientKey => {
		return (
			<li key={ingredientKey}>
				<span style={{ textTransform: 'capitalize' }}>
					{ingredientKey}: {props.ingredients[ingredientKey]}
				</span>
			</li>
		);
	});

	return (
		<div className={style.OrderSummary}>
			<hr />
			<h3> Your Order </h3>
			<hr />
			<p> A delicious burger with the following ingredients: </p>
			<ul>{ingredientsSummary}</ul>
			<p>
				<strong>Total Price: ${props.price.toFixed(2)}</strong>
			</p>
			<p> Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
			<hr />
		</div>
	);
};

export default orderSummary;
