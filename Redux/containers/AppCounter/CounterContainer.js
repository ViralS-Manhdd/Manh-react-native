// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import CounterComponent from './../../components/AppCounter/CounterComponent'

//Actions
import {incrementAction, decrementAction} from './../../actions/index'

const mapStateToProps = (state) => {
    //alert(`state after changed : ${JSON.stringify(state.counterReducers)}`);
    return {
        times: state.counterReducers ? state.counterReducers : 0,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step) => {
            dispatch(decrementAction(step))
        },
        onIncrement: (step) => {
            dispatch(incrementAction(step))
        },
    }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
export default CounterContainer
