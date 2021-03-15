import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer'
import { /*persistStore,  persistReducer ,*/ FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

/*
const persistConfig = {
    key: 'keyStorage',
    storage,
    blacklist: ["filter"]
};*/
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER]
        }
    }), logger
]


const store = configureStore({
    reducer: {
     contacts:    contactReducer
    },
    middleware,
});

//const persistor = persistStore(store)
export default store /*{store, persistor }*/;