import * as React from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {  connect,  } from 'react-redux'

import { RootState } from '../../store/store'
import { increment, decrement, add, sub } from '../../store/counter'

export interface ICounterProps {
    counter:number
    increment: () => void
    decrement: () => void
    add: () => void
    sub: () => void
}

export interface ICounterState {
    counter:number
}

class Counter extends React.Component<ICounterProps, ICounterState> {
    
    state = {
        counter: 8
    }

    counterChangedHandler = ( action: 'inc' | 'dec' | 'add' | 'sub', value?:number ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + (value ? value:0)  } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - (value ? value:0) } } )
                break;
        }
    }

  public render() {
    return (
        <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={() => this.props.increment()} />
        <CounterControl label="Decrement" clicked={() => this.props.decrement()}  />
        <CounterControl label="Add 5" clicked={() => this.props.add()}  />
        <CounterControl label="Subtract 5" clicked={() => this.props.sub()}  />
    </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
    counter:state.counter.counter
})

const mapDispatchToProps = () => ({
    increment,
    decrement,
    add,
    sub
})

export default connect(mapStateToProps,mapDispatchToProps())(Counter)