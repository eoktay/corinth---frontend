import { createSlice, createSelector } from "@reduxjs/toolkit";
import * as action from "./api"
const slice = createSlice({
    name: 'user',
    initialState: {
        value: null,
        loading: false,
        error: null
    },
    reducers: {
        loginRequested: (user, action) => {
            user.value = action.payload
            user.loading = false
            user.error = null
        },
        requested: (user, action) => {
            user.loading = true
            user.error = null
        },
        requestFailed: (user, action) => {
            user.loading = false
            user.error = action.payload
        },
        logoutRequested: (user, action) => {
            user.value = null
            user.error = null
        }



    }
})


const { loginRequested, requested, requestFailed, logoutRequested, userAdded } = slice.actions
export default slice.reducer
export const getUserError = createSelector(
    state => state.entities.user.error,
    error => error

)
export const login = (userName, password) => (dispatch, getState) => {
    dispatch(action.apiCallBegan({
        url:"/auth",
        onStart: requested.type,
        onSuccess: loginRequested.type,
        onFailed: requestFailed.type,
        data: {
            name:"kidus",
            password : '12345'
        },
        method: 'post'

    }))
}

export const getUser = createSelector(
    state => state.entities.user,
    user => user
)
export const getToken = createSelector(
    state => state.entities.user,
    user => user.value?.token
)