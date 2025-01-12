import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // Uses localStorage for web
import rootReducer from './rootReducer'; // Your slice

// Redux-Persist Configuration
const persistConfig = {
    key: 'root', // Key to identify storage
    storage,     // Storage method (localStorage)
    whitelist: ['user'], // Reducer to persist
};

const resetMessagesMiddleware = (store) => (next) => (action) => {
    console.log(action.type);
    
    if (action.type === '@@router/LOCATION_CHANGE') {
        store.dispatch(resetMessages());
    }
    return next(action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(resetMessagesMiddleware),
});

export const persistor = persistStore(store);
export default store;