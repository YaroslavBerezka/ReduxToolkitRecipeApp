import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { api } from './api/api'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as userReducer } from './user/user.slice'

const logger = createLogger({
    collapsed: true,
})

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        users: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
