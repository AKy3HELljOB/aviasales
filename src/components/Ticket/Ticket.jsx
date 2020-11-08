import React from 'react';
import s7logo from '../../assets/s7logo.svg';
import Header from './Header/Header' 
import Segment from './Segment/Segment' 
import './Ticket.styles.css';

const Ticket = (props) => (
  <div className="ticket">
    <Header price="13400" logo={s7logo}/>
    <Segment origin="MOW" destination="HKT" date="11:45" duration="35ч 10м" stops={["HKG", "JNB"]}/>
    <Segment origin="HKT" destination="HKT" date="18:45" duration="10ч 45м"/>
  </div>
);

 Ticket.propTypes = {
   // bla: PropTypes.string,
 };

 Ticket.defaultProps = {
   // bla: 'test',
 };

export default Ticket;