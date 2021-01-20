import React, { useContext } from "react";
import { OrderContext, CHEAPEST, FASTEST } from "../../reducers/orderReducer";
import "./Switch.styles.css";

const Switch = () => {
  const { orderState, dispatchOrder } = useContext(OrderContext);

  const values = [
    { key: CHEAPEST, style: "button left", text: "Самый дешевый" },
    { key: FASTEST, style: "button right", text: "Самый быстрый" }
  ];

  const makeButton = ({ key, style, text }) => (
    <span key={key}>
      <input
        type="radio"
        id={key}
        name="order"
        checked={orderState.selected === key}
        className="input visually-hidden"
        onChange={(e) => { dispatchOrder({ type: e.target.id})}}
      />
      <label htmlFor={key} className={style}>
        {text}
      </label>
    </span>
  );

  return (
    <div className="switch">
      <div>
        {values.map(makeButton)}
      </div>
    </div>
  );
};
export default Switch;
