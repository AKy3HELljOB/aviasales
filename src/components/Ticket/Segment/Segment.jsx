import React from 'react';
import PropTypes from 'prop-types';
import './Segment.styles.css';

const StopsCountString = (count) => {
  switch (count) {
    case 0:
      return "Без пересадок";
    case 1:
      return count + " пересадка";
      case 2:
      case 3:
      case 4:
      return count + " пересадки";
    default:
      return count + " пересадок";
  }
}

const InfoBlock = (props) => (
  <div className="infoBlockWrapper">
    <div className="row1" >{props.label}</div>
    <div className="row2" >{props.data} </div>
  </div>
);

const Info = (props) => (
  <div className="infoWrapper">
    <div  className="column" >
      <InfoBlock
        label={props.origin + " - " + props.destination}
        data={props.date + "-" + props.date}
      />
    </div>
    <div  className="column" >
      <InfoBlock className="column" 
        label="В пути"
        data={props.duration}
      />
    </div>
    <div  className="column" >
      <InfoBlock className="column"
        label={StopsCountString(props.stops.length)}
        data={props.stops.join(", ")}
      />
    </div>
  </div>
);

Info.propTypes = {
  stops: PropTypes.array
};

Info.defaultProps = {
  stops: []
};

export default Info;
