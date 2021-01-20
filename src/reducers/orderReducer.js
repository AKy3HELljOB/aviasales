import React from 'react'

export const OrderContext = React.createContext(null);

export const CHEAPEST = "cheapest",
  FASTEST = "fastest";

export const initState = {
  selected: CHEAPEST
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CHEAPEST:
      return {
        selected: CHEAPEST
      }
    case FASTEST:
      return {
        selected: FASTEST
      };
    default:
      throw new Error();
  }
} 