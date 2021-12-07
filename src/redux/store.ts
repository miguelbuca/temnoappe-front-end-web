import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'

import rootReducers from './rootReducer'

const sagaMiddleware  = createSagaMiddleware()

const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(rootReducers)

sagaMiddleware.run(rootSaga)

export default store