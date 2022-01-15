import { createSlice } from "@reduxjs/toolkit"


export interface CounterState {
    counter:number
}

const initialState: CounterState = {
    counter:0
}

export const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: state => {
            state.counter += 1
        },
        decrement: state => {
            state.counter -= 1
        },
        add: state => {
            state.counter += 5
        },
        sub: state => {
            state.counter -= 5
        }
    }
})

export const { increment, decrement, add, sub } = counterSlice.actions

export default counterSlice.reducer