import React from 'react';

import Layout from './hoc/Layout/Layout';
import BurderBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
	return (
		<div>
			<Layout>
				<BurderBuilder />
			</Layout>
		</div>
	);
}

export default App;
