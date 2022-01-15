import * as React from "react";
import './CounterControl.css'
interface ICounterControlProps {
  label: string;
  clicked: () => void;
}

const CounterControl: React.FC<ICounterControlProps> = (props) => {
  return (
    <div className="CounterControl" onClick={props.clicked}>
      {props.label}
    </div>
  );
};

export default CounterControl;
