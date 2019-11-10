import React from 'react';

import style from './Layout.module.css';

import Aux from '../../hoc/Aux';

const layout = props => {
  return (
    <Aux>
      <div>toolbas, sidedrawer, backdrop</div>
      <main className={style.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
