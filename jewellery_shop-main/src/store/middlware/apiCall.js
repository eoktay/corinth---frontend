import * as actions from '../api'
import axios from 'axios'
import { productRecived } from '../product'
// const response = {
//     data: {
//         id: 1,
//         name: 'kidus',
//         token: 'man'
//     }
// }
// id, title, customer, type, properties, notes, create date, update date
let products = [{
    id: 0,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids',
    createddate: '22/11/1898'
    , finished: false

}, {
    id: 1,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids',
    createddate: '22/11/1898'

    , finished: false
}, {
    id: 2,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids'
    , createddate: '22/11/1898'
    , finished: false

}, {
    id: 3,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids'
    , createddate: '22/11/1898'

    , finished: true
}, {
    id: 4,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids'
    , createddate: '22/11/1898'

    , finished: true
}, {
    id: 5,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids'
    , createddate: '22/11/1898'
    , finished: true

}, {
    id: 6,
    title: "My most favorite place in the world",
    notes: "note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dolorum ratione optio. Tenetur id fugiat totam, ducimus velit? Officia mollitia reiciendis ipsum!",
    type: 'type',
    properties: 'properties',
    costumer: 'kids'
    , createddate: '22/11/1898'
    , updatedDate: '22/11/1898'
    , finished: true

},]
const apiCall = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    const { url, onStart, onFailed, onSuccess, data, method, headers } = action.payload
    if (onStart) dispatch({ type: onStart })
    next(action)
    try {

        const response = await axios.request({
            baseURL: 'https://erdenshop.herokuapp.com/api/v1',
            url,
            method,
            data,
            headers
        })

        if (response.status === 200 || response.status === 201) {
            dispatch(actions.apiCallSuccess(response.data.json))
            if (onSuccess) dispatch({ type: onSuccess, payload: response.data.json })
        } else {
            dispatch(actions.apiCallFailed(response.data))
            if (onFailed) dispatch({ type: onFailed, payload: response.data.message })
        }
    } catch (error) {
        dispatch(actions.apiCallFailed(error.message))
        if (onFailed) dispatch({
            type: onFailed, payload:
                error.response ? error.response.data.errors : error.message
        })
    }


}

export default apiCall;