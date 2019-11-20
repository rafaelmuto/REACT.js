import React, { Component } from 'react';

import axiosOrders from '../../axios-orders';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurderBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 4,
			purchasable: false,
			purchasing: false
		};
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(ingredientKey => {
				return ingredients[ingredientKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCounted = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCounted;

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + INGREDIENT_PRICES[type];

		this.updatePurchaseState(updatedIngredients);

		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCounted = oldCount - 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCounted;

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - INGREDIENT_PRICES[type];

		this.updatePurchaseState(updatedIngredients);

		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	purchaseHandler = () => {
		this.setState({ purchasing: !this.state.purchasing });
	};

	purchaseContinueHandler = () => {
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'eumesmo',
				address: {
					street: 'semnome',
					zipCode: '12345678',
					country: 'nowhere'
				},
				email: 'eumesmo@qualquerum.ai'
			},
			deliveryMethod: 'fastest'
		};
		axiosOrders
			.post('/orders.json', order)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});

		this.purchaseHandler();
	};

	bugerResetHandler = () => {
		this.setState({
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 4,
			purchasing: false
		});
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClose={this.purchaseHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCancelled={this.bugerResetHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					order={this.purchaseHandler}
					reset={this.bugerResetHandler}
				/>
			</Aux>
		);
	}
}

export default BurderBuilder;
