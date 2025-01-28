import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import blockchainReducer from './blockchain/blockchainReducer';
import dataReducer from './data/dataReducer';

// Combine your reducers
const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

// Configure the store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: rootReducer, // Pass your combined reducers
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
