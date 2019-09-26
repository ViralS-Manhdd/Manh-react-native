// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import NewsItem from '../../components/TestSaga/NewsItem'
import testSagaReducer from '../../reducers/chatReducers'

//Actions

const mapStateToProps = (state) => {
    fetchAPI = state.testSagaReducer
}

const mapDispatchToProps = (dispatch) => {

}
const NewsItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewsItem)
export default NewsItemContainer
