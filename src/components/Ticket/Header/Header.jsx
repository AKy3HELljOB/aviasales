import React from 'react';
import './Header.styles.css';

const Header = (props) => (
  <div className="headerWrapper">
    <div className="price">{props.price}</div>
    <span></span>
    <img className="logo" src={props.logo}></img>
  </div>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
