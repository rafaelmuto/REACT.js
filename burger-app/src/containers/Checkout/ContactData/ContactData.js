import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import style from './ContactData.module.css';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	};

	orderHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
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

		axios
			.post('/orders.json', order)
			.then(res => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<input type="text" name="name" placeholder="your name here" />
				<input type="text" name="email" placeholder="your email here" />
				<input type="text" name="street" placeholder="your street name here" />
				<input type="text" name="postal" placeholder="your postal code here" />
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={style.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default withRouter(ContactData);
