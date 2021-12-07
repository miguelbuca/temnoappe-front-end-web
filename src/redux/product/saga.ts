import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from './types'

const api = 'http://localhost:3333'

function get(){
    return fetch(`${api}/product/all/`, {
        method: 'GET'
    }).then(response => response.json())
    .catch(error=>console.log(error))
}

function set(data: Product){
    return fetch(`${api}/product/add`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
}).then(response => response.json())
    .catch(error=>console.log(error))
}
function update(data: Product){
    return fetch(`${api}/product/edit/${data?.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(data)
}).then(response => response.json())
    .catch(error=>console.log(error))
}
function deleteID(id: number){
    return fetch(`${api}/product/delete/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "DELETE"
}).then(response => response.json())
    .catch(error=>console.log(error))
}

function* fetchProducts() : Generator{
    try {
        const products = yield get()

        yield put({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: products
        })

    } catch (error) {
        yield put({
            type: types.GET_PRODUCTS_FALIED,
            message: error
        })
    }
}

function* setProducts(action: any) : Generator{
    try {
        yield set(action.payload)

        yield put({
            type: types.SET_PRODUCT_SUCCESS,
        })

    } catch (error) {
        yield put({
            type: types.SET_PRODUCT_FALIED,
            message: error
        })
    }
}

function* updateProducts(action: any) : Generator{
    try {
        yield update(action.payload)

        yield put({
            type: types.UPDATE_PRODUCT_SUCCESS,
        })

    } catch (error) {
        yield put({
            type: types.UPDATE_PRODUCT_FALIED,
            message: error
        })
    }
}

function* deleteProducts(action: any) : Generator{
    try {
        yield deleteID(action.payload)

        yield put({
            type: types.DELETE_PRODUCT_SUCCESS,
        })

    } catch (error) {
        yield put({
            type: types.DELETE_PRODUCT_FALIED,
            message: error
        })
    }
}

export function* productsSaga() {
    yield takeEvery(types.GET_PRODUCTS_REQUESTED,fetchProducts)
}

export function* productAddSaga() {
    yield takeLatest(types.SET_PRODUCT_REQUESTED,setProducts)
}

export function* productUpdateSaga() {
    yield takeLatest(types.UPDATE_PRODUCT_REQUESTED,updateProducts)
}
export function* productDeleteSaga() {
    yield takeLatest(types.DELETE_PRODUCT_REQUESTED,deleteProducts)
}