// Copyright (c) 2019-present, Personal. All Rights Reserved.
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    headerListItem: {
        width: '100%',
        height: 60,
        backgroundColor: '#6200EE',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#6200EE',
        marginBottom: 15,
    },
    areaListItem: {
        backgroundColor: '#E1E1E1',
        height: '100%',
    },
    categoryItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 80,
        paddingHorizontal: 25,
    },
    avatar: {
        flex: 2,
        marginRight: 15,
    },
    img: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 25,
    },
    imgPhone: {
        marginTop: 15,
        marginLeft: 40,
        width: 20,
        height: 20,
    },
    name_contact: {
        paddingTop: 5,
    },
    info_contact: {
        flexDirection: 'row',
    },
    button_info: {
        flex: 3,
    },

    //  Style chung
    floatLeft: {},
    floatRight: {},
    flexDirRow: {
        flexDirection: 'row',
    },

    //  Style detalContact
    title_detal_contact: {
        backgroundColor: '#d6d6d6',
        marginBottom: 15,
    },
    content_detal_contact: {},
    number_phone: {},
    email_contact: {},
    number: {},
    ct: {},
    cpn_number: {},
    cpn_email: {},
    avatar_detail: {
        width: 100,
        height: 100,
        borderRadius: 999,
        margin: 20,
    },
    name_contact_detail: {

        alignItems: 'center',
        fontSize: 22,
        marginTop: 30,
    },
})

export default styles
