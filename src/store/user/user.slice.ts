import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitialUserState, IUser } from '../../types/user.types'
import { getUserById } from './user.actions'

const initialState: IInitialUserState = {
    isLoading: false,
    error: null,
    user: {} as IUser,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                getUserById.fulfilled,
                (state, action: PayloadAction<IUser>) => {
                    state.isLoading = false
                    state.user = action.payload
                }
            )
            .addCase(getUserById.rejected, (state, action: any) => {
                state.isLoading = false
                state.error = action.payload
                state.user = {} as IUser
            })
    },
})

export const { actions, reducer } = userSlice
