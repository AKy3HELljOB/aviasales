import React from 'react';
//import PropTypes from 'prop-types';
import './Checkbox.styles.css';

const Checkbox = (props) => (<div>
  <label className="checkbox">
    <input type="checkbox" className="input visually-hidden"/>
    <span className="checked"/>
    {props.text}
  </label>
</div>
);

Checkbox.propTypes = {
  // bla: PropTypes.string,
};

Checkbox.defaultProps = {
  // bla: 'test',
};

export default Checkbox;