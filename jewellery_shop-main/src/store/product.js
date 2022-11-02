import { createSlice, createSelector } from "@reduxjs/toolkit";
import * as action from "./api"
import { getToken } from "./user";
const slice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        finishedProducts: [],
        unfinishedProducts: [],
        loading: false,
        error: null,
        allProductsPageNo: 0,
        finishedProductPageNo:0,
        unfinishedProductPageNo:0

    },
    reducers: {
        productRecived: (product, action) => {
            product.allProducts = action.payload.orders
            product.allProductsPageNo = action.payload.pages
            product.loading = false
            product.error = null
        },
        requested: (product, action) => {
            product.loading = true
            product.error = null
        },
        requestFailed: (product, action) => {
            product.loading = false
            product.error = action.payload
        },
        finishedProductRecived: (product, action) => {
            product.finishedProducts = action.payload.orders
            product.finishedProductPageNo = action.payload.pages
            product.loading = false
            product.error = null
        },
        unfinishedProductRecived: (product, action) => {
            product.unfinishedProducts = action.payload.orders
            // product.unfinishedProducts = []
            product.unfinishedProductPageNo = action.payload.pages
            product.loading = false
            product.error = null
        }


    }
})


export default slice.reducer
export const { productRecived, requestFailed, requested ,finishedProductRecived, unfinishedProductRecived} = slice.actions
export const loadProducts = (url, successType) => (dispatch, getState) => {
    const token = getToken(getState())
    dispatch(
        action.apiCallBegan({
            url,
            onStart: requested.type,
            onSuccess: successType,
            onFailed: requestFailed.type,
            method: "get",
            headers: { Authorization: `Bearer ${token}` }
        })
    )
}


export const getProducts = createSelector(
    state => state.entities.products,
    products => products
)