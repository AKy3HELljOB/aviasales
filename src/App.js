import React from 'react';
import logo from './assets/logo.svg';
import Checkbox from './components/Checkbox/Checkbox'
import Switch from './components/Switch/Switch'
import Ticket from './components/Ticket/Ticket'
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
    <Ticket/>
    <Ticket/>
    <Ticket/>
  </div>
  );

}

function App() {
  return (
  <div className="app Unselectable">
    <div className="appHeader">
      <img src={logo}/>
    </div>
    <div className="app-wrapper">
      <Filter />
      <Tab />
      <Tickets />
    </div> </
  div>
  );
}

export default App;