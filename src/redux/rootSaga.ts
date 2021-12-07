import { all } from 'redux-saga/effects'

import { productsSaga, productAddSaga, productUpdateSaga, productDeleteSaga  } from './product/saga'

export default function* rootSaga() {
    yield all([
        productAddSaga(),
        productsSaga(),
        productUpdateSaga(),
        productDeleteSaga()
    ])
}