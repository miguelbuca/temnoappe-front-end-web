import types from "../redux/types";

export interface InitialState{
    products: Product[] | any,
    loading?: boolean,
    selectedProduct: any,
    error?: any
}

export interface Action<T>{
    type: types,
    payload: T,
    message: any
}