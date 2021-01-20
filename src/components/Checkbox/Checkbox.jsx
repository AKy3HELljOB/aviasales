import React from "react";
import PropTypes from 'prop-types';
import "./Checkbox.styles.css";

const Checkbox = ({onChange, checked, text}) => (
  <div>
    <label className="checkbox">
      <input
        type="checkbox"
        className="input visually-hidden"
        onChange={onChange}
        checked={checked}
      />
      <span className="checked" />
      {text}
    </label>
  </div>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  text: PropTypes.string
};

export default Checkbox;
