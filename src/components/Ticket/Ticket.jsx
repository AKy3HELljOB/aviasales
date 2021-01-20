import React from 'react';
import PropTypes from 'prop-types'
import Header from './Header/Header' 
import Segment from './Segment/Segment' 
import './Ticket.styles.css';

const Ticket = (props) => (
  <div className="ticket">
    <Header {...props}/>
    <Segment {...props.segments[0]}/>
    <Segment {...props.segments[1]}/>
  </div>
)

 Ticket.propTypes = {
   segments: PropTypes.arrayOf(PropTypes.object)
 };

 Ticket.defaultProps = {
   // bla: 'test',
 };

export default Ticket;