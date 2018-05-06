// import {createStore,applyMiddleware} from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import reducer from './reducer'//引入总和的reducer
// import rootSaga from './sagas/testSaga'//写异步逻辑

// const sagaMiddleware=createSagaMiddleware()//进行调用这个插件

// export default function configureStore(preloadedState){
//     const store=createStore(
//         reducer,
//         preloadedState,
//         applyMiddleware(
//             sagaMiddleware//加到中间件中
//         )
//     )
//     sagaMiddleware.run(rootSaga)
//     return store
// }
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducer'
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/testSaga'
// const sagaMiddleware = createSagaMiddleware();//调用
// export default function configureStore(preloadedState){
//     const store=createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(
//             sagaMiddleware//加到中间件中
//         )
//     )
//     sagaMiddleware.run(rootSaga)
//     return store
// }

import {createStore,applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import reducers from './reducer'
let store=createStore(
    reducers,
    // applyMiddleware(logger)
)
export default store

