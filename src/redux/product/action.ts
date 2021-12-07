import types from "./types";

export function getProducts(products: Product[]) {
  return {
    type: types.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
}

export function setSelectedProduct(product: Product) {
  return {
    type: types.SELECTED_PRODUCT,
    payload: product,
  };
}

export function setProduct(product: Product) {
  return {
    type: types.SET_PRODUCT_REQUESTED,
    payload: product,
  };
}

export function updateProduct(product: Product) {
  return {
    type: types.UPDATE_PRODUCT_REQUESTED,
    payload: product,
  };
}
export function deleteProduct(id?: number) {
  return {
    type: types.DELETE_PRODUCT_REQUESTED,
    payload: id,
  };
}