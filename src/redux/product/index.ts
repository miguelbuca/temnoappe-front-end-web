import { Action, InitialState } from "../../interface/redux";
import types from "./types";

const initialState: InitialState = {
  products: [],
  selectedProduct: {},
  loading: false,
  error: null,
};

export default function products(
  state = initialState,
  action: Action<object>
): InitialState {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case types.GET_PRODUCTS_FALIED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case types.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case types.SET_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case types.SET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.SET_PRODUCT_FALIED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case types.UPDATE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.UPDATE_PRODUCT_FALIED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case types.DELETE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.DELETE_PRODUCT_FALIED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}
