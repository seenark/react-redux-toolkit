import * as React from "react";

import './CounterOutput.css'

interface ICounterOutputProps {
  value: number;
}

const CounterOutput: React.FunctionComponent<ICounterOutputProps> = (props) => {
  return <div className="CounterOutput">Current Counter: {props.value}</div>;
};

export default CounterOutput;
