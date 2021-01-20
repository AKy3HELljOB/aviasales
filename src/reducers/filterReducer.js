import React from 'react'

export const FilterContext = React.createContext(null);

export const ALL = "all",
  NONE = "none",
  ONE = "one",
  TWO = "two",
  THREE = "three";

export const initState = {
  all: true,
  none: true,
  one: true,
  two: true,
  three: true
};

export const reducer = (state, action) => {
  const updateAll = (state) => ({ ...state, all: state.none && state.one && state.two && state.three });

  switch (action.type) {
    case ALL:
      return {
        all: !state.all,
        none: !state.all,
        one: !state.all,
        two: !state.all,
        three: !state.all
      };
    case NONE:
      return updateAll({ ...state, none: !state.none });
    case ONE:
      return updateAll({ ...state, one: !state.one });
    case TWO:
      return updateAll({ ...state, two: !state.two });
    case THREE:
      return updateAll({ ...state, three: !state.three });
    default:
      console.log(action.type);
      throw new Error();
  }
} 