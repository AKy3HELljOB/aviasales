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

const formatNumber = (number) => ((number < 10 ? "0" : "") + number);
const formatTime = (date) => {
  return date.toLocaleString("ru-RU", { timezone: 'UTC', hour: 'numeric', minute: 'numeric'});
}

const HOUR_TO_MIN = 60;
const formatDuration = (duration) => (formatNumber(~~(duration / HOUR_TO_MIN) + "ч " + formatNumber(duration % HOUR_TO_MIN) + "м"));

const calcTime = (date, duration) => {
  const MIN_TO_MSEC = 60000;
  const msecStart = Date.parse(date);
  const startDate = new Date(msecStart);
  const finishDate = new Date(msecStart + duration * MIN_TO_MSEC);
  
  return formatTime(startDate) + " - " + formatTime(finishDate);
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
        data={calcTime(props.date, props.duration)}
      />
    </div>
    <div  className="column" >
      <InfoBlock className="column" 
        label="В пути"
        data={formatDuration(props.duration)}
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
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string,
  duration: PropTypes.number,
  stops: PropTypes.array
};

Info.defaultProps = {
  stops: []
};

export default Info;
