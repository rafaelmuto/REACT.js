import React from 'react';

import Layout from './hoc/Layout/Layout';
import BurderBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <BurderBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
