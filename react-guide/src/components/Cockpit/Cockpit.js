import React from 'react';
import style from './Cockpit.module.css';

const cockpit = props => {
  return (
    <div className={style.Cockpit}>
      <hr />
      <h1>Hi, this is a REACT app!</h1>
      <hr />
      <p>Lorem esse deserunt amet consectetur dolore voluptate commodo ut ea nulla dolor. Dolor excepteur qui ad ipsum sunt cupidatat amet exercitation laborum anim pariatur ad. Velit ullamco sit minim ex qui qui amet cupidatat. Cupidatat voluptate fugiat cupidatat ut reprehenderit cillum id labore cillum est sint officia.</p>
      <p>In nulla commodo commodo est minim nostrud Lorem dolor irure ullamco sint est. Proident laborum culpa voluptate velit enim irure proident esse dolor et sint aute pariatur. Eiusmod in labore culpa voluptate ut consectetur nisi aliqua dolor reprehenderit officia cillum. Aliquip Lorem proident excepteur eu in dolore aute cillum Lorem reprehenderit ex labore irure pariatur.</p>
      <p>Occaecat proident exercitation enim dolore Lorem consectetur minim. Aliqua sit eiusmod adipisicing deserunt id fugiat non. Aute veniam magna do ullamco minim nostrud labore pariatur. Ut ad reprehenderit dolor nisi nostrud et.</p>

      <button className={style.CockpitBtn} onClick={props.clicked}>
        click ME!
      </button>
      {props.children}
      <hr className="glyph" />
    </div>
  );
};

export default cockpit;
