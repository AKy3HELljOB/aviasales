import React, { useContext } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import {
  FilterContext,
  ALL,
  NONE,
  ONE,
  TWO,
  THREE,
} from "../../reducers/filterReducer";

const Filter = () => {
  const { filterState, dispatchFilter } = useContext(FilterContext);

const values = [
  {text: "Все", checked: filterState.all, key: ALL},
  {text: "Без пересадок", checked: filterState.none, key: NONE},
  {text: "1 пересадка", checked: filterState.one, key: ONE},
  {text: "2 пересадки", checked: filterState.two, key: TWO},
  {text: "3 пересадки", checked: filterState.three, key: THREE}
];
const makeCheckbox = ({text, checked, key}) => (
  <Checkbox
    key={key}
    text={text}
    checked={checked}
    onChange={(e) => {console.log(e.target); dispatchFilter({ type: key })}}
  />);

  return (
    <div className="filter">
      <h1>Количество пересадок </h1>
      {values.map(makeCheckbox) }
    </div>
  );
};

export default Filter;
