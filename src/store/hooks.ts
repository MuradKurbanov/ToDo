import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import MainActions from './actions';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators({ ...MainActions }, dispatch);
};
