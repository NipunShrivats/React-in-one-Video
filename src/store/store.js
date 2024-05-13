import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers";

// const store = configureStore({
//     reducer: rootReducer
// })// createing a store

// export default store;

// configureStore.js
//------------redux-persist

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})// createing a store
let persistor = persistStore(store)

export { store, persistor }
