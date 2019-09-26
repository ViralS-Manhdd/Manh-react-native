// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import ScreenChat from '../../components/ChatScreen/chat'
import {onSendMsg} from '../../actions'

//Actions

const mapStateToProps = (state) => {
    return {
        response: state.chatReducer ? state.chatReducer : 0,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSend: (msg) => {
            dispatch(onSendMsg(msg))
        },
    }
}
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ScreenChat)
export default ChatContainer
