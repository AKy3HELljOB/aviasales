import React, { useEffect, useState } from 'react';
import logo from './assets/logo.svg';
import Checkbox from './components/Checkbox/Checkbox'
import Switch from './components/Switch/Switch'
import Ticket from './components/Ticket/Ticket'
import useInterval from './hooks/UseInterval/UseInterval'
import {getRequestId, getTickets} from './api/ticket/ticket'
import './App.css';

const Filter = () => {
  return (
    <div className="filter">
      <h1>Количество пересадок </h1>
      <Checkbox text="Все" />
      <Checkbox text="Без пересадок" />
      <Checkbox text="1 пересадка" />
      <Checkbox text="2 пересадки" />
      <Checkbox text="3 пересадки" />
    </div>
  );
}
const Tab = () => {
  return (
    <div className="tab">
      <Switch />
    </div>
  )
}
const Tickets = () => {
  return (
    <div className="tickets">
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}

function App() {
  const [searchId, setSearchId] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [tickets, setTickets] = useState([]);
  const TIMEOUT = 1000;

  useEffect(() => {getRequestId(res => {console.log(res); setSearchId(res.searchId)})}, [])

  useInterval(async () => {
    const appendTickets = (res) => {
      if (res.stop === true)
        setIsLoaded(true);
      setTickets([...tickets, ...res.tickets].sort(compareDuration));
    }

    getTickets(searchId, appendTickets)    
  }, isLoaded ? null : TIMEOUT);

  //tickets.sort((a, b) => a.price - b.price)
  const comparePrice = (a, b) => a - b;
  const compareDuration = (a, b) => {
    const compareFirst = a.segments[0].duration - b.segments[0].duration;
    const compareSecond = a.segments[1].duration - b.segments[1].duration;

    if (compareFirst + compareSecond === 0)
      return compareFirst;
    return compareFirst + compareSecond;
  }

  console.log(tickets);

  return (
    <div className="app Unselectable">
      <div className="appHeader">
        <img src={logo} />
      </div>
      <div className="app-wrapper">
        <Filter />
        <Tab />
        <Tickets />
      </div>
    </div>
  );
}

export default App;