import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import style from './Modal.module.css';

const modal = props => (
	<Aux>
		<Backdrop show={props.show} clicked={props.modalClose} />
		<div
			className={style.Modal}
			style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0' }}
		>
			{props.children}
		</div>
	</Aux>
);

export default React.memo(modal);
