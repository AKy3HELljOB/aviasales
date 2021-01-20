import React from 'react';
import PropTypes from 'prop-types'

import './Header.styles.css';
const formatPrice = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")  + " Р";
}

const logoSource = (name) => (`http://pics.avs.io/99/36/${name}.png`); 

const Header = ({price, carrier}) => (
  <div className="headerWrapper">
    <div className="price">{formatPrice(price)}</div>
    <span></span>
    <span>
      <img className="logo" src={logoSource(carrier)} alt={carrier}></img>
    </span>
  </div>
);

Header.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string
};

export default Header;
