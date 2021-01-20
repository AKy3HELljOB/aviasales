import React, { useEffect, useState, useReducer } from 'react';
import logo from './assets/logo.svg';
import Filter from './containers/Filter/Filter'
import { FilterContext, reducer as filterReducer, initState as initFilterState } from './reducers/filterReducer'
import { OrderContext, reducer as orderReducer, initState as initOrderState, FASTEST } from './reducers/orderReducer'
import Switch from './components/Switch/Switch'
import Ticket from './components/Ticket/Ticket'
import useInterval from './hooks/UseInterval/UseInterval'
import { getRequestId, getTickets } from './api/ticket/ticket'
import './App.css';

const Tab = () => {
  return (
    <div className="tab">
      <Switch />
    </div>
  )
}
const Tickets = (tickets) => {
  let key=0;
  return (tickets.length > 0 ?
    <div className="tickets">
      {tickets.map((ticket) => (<Ticket {...ticket} key={key++}/>))}
    </div>
    :
    null
  );
}

export const comparePrice = (a, b) => a.price - b.price;

export const compareDuration = (a, b) => {
  const compareFirst = a.segments[0].duration - b.segments[0].duration;
  const compareSecond = a.segments[1].duration - b.segments[1].duration;
  if (compareFirst + compareSecond === 0)
    return compareFirst;
  return compareFirst + compareSecond;
}

export const filterTickets = (ticket, filterState) => {
  if (filterState.all)
    return true;

  const stopsCount = ticket.segments[0].stops.length + ticket.segments[1].stops.length;
  switch (stopsCount) {
    case 0:
      return filterState.none;
    case 1:
      return filterState.one;
    case 2:
      return filterState.two;
    case 3:
      return filterState.three;
    default:
      return false;
  }
}

function App() {
  const [searchId, setSearchId] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [currentTickets, setCurrentTickets] = useState([]);
  const [currentPageTickets, setCurrentPageTickets] = useState([]);
  const [filterState, dispatchFilter] = useReducer(filterReducer, initFilterState);
  const [orderState, dispatchOrder] = useReducer(orderReducer, initOrderState);
  const TIMEOUT = 1000;

  useEffect(
    () => { getRequestId(res => setSearchId(res.searchId)) },
    []);

  useInterval(async () => {
    const appendTickets = (res) => {
      if (res.stop === true)
        setIsLoaded(true);
      setTickets([...tickets, ...res.tickets]);
    }
    getTickets(searchId, appendTickets);
  }, isLoaded ? null : TIMEOUT);

  useEffect(
    () => setCurrentTickets(tickets.filter(ticket => filterTickets(ticket, filterState))),
    [tickets, filterState]);
    
  useEffect(
    () => { 
      const orderType = (a, b) => orderState.selected === FASTEST ? compareDuration(a, b) : comparePrice(a, b);
      setCurrentTickets(currentTickets.sort(orderType)); 
      setCurrentPageTickets(currentTickets.slice(0, 5));},
    [currentTickets, orderState]);

  return (
    <FilterContext.Provider value={{ dispatchFilter, filterState }}>
      <OrderContext.Provider value={{ dispatchOrder, orderState }}>
        <div className="app unselectable">
          <div className="appHeader">
            <img src={logo} alt="Aviasales logo"/>
          </div>
          <div className="app-wrapper">
            <Filter />
            <Tab />
            {Tickets(currentPageTickets)}
          </div>
        </div>
      </OrderContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;