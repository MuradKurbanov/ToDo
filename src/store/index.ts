import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector as fn } from 'react-redux';

import MainActions from './actions';
import MainSlice from './slice';

export const store = configureStore({ reducer: MainSlice.reducer });

export type RootState = ReturnType<typeof store.getState>;
export const useSelector = (): RootState => fn((state: RootState) => state);
export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ ...MainActions }, dispatch);
};
