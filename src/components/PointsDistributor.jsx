import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const PointsDistributor = (props) => {

  //Connect to UserContext via Context API:
  const {
    charPointsRoll, accAssignedPoints,
  } = useContext(UserContext);

  return (
    <div className="points-distributor-wrapper">
    <div className="points-distributor-category">
        <div className="point-value">{props.pointValue}</div>
        <div className="category-name">{props.categoryName}<br />&#40;{props.categoryShorthand}&#41;</div>
    </div>
    <div className="points-distributor-control-panel">
      <button onClick={props.addCallback} disabled={((charPointsRoll.reduce((a,b)=>a+b,0))-accAssignedPoints<1 || props.pointValue>9)}>+</button>
      <button onClick={props.subCallback} disabled={(props.pointValue<3)}>-</button>
    </div>
    <div key='1' className="points-distributor-value">
      {props.description}
    </div>
  </div>
  )
}

export default PointsDistributor;