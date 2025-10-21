import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { TaskType } from '../types';

interface InitialState {
    tasks: TaskType[];
}

const initialState: InitialState = {
    tasks: [],
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setTasks: (state: InitialState, action: PayloadAction<InitialState['tasks']>) => {
            state.tasks = action.payload;
        },
    },
});

export const { setTasks } = mainSlice.actions;

export default mainSlice.reducer;
