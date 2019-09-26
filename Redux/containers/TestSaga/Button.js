// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import ButtonComponent from '../../components/TestSaga/Button'

//Actions
import {getNews} from '../../actions'

const mapStateToProps = (state) => {
    //alert(`state after changed : ${JSON.stringify(state.counterReducers)}`);
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetNews: () => {
            dispatch(getNews())
        },

    }
}
const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent)
export default ButtonContainer
