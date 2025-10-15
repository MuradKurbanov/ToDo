import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { TaskType } from '../types';

interface InitialState {
    tasks: TaskType[];
}

const initialState: InitialState = {
    tasks: [],
};

export default createSlice({
    name: 'main',
    initialState,
    reducers: {
        setTasks: (state: InitialState, action: PayloadAction<InitialState['tasks']>) => {
            state.tasks = action.payload;
        },
    },
});
