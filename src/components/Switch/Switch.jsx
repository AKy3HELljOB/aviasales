import React from 'react';
import './Switch.styles.css';

const Switch = (props) => (
  <div className="switch">
    <div>
    <input type="radio" id="cheapest" name="order" checked={true} className="input visually-hidden" />
    <label for="cheapest" className="button left">Самый дешевый</label>
    
    <input type="radio" id="fastest" name="order" className="input visually-hidden" />
    <label for="fastest" className="button right">Самый быстрый</label>
    </div>
  </div>
);

export default Switch;
