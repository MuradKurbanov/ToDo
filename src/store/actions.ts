import { TaskType } from '../types';
import { setTasks } from './slice';
import { addTasksApi, deleteTaskApi, getTasksApi, updateTaskApi } from './api';
import { type AppDispatch, RootState } from './store';

const getTasks = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await getTasksApi();
        dispatch(setTasks(data));
    } catch {
        throw Error('Error ...');
    }
};

const addTask = (newTask: TaskType) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await addTasksApi(newTask);
        dispatch(setTasks(data));
    } catch {
        throw Error('Error ...');
    }
};

const toggleTask = (id: string, completed: boolean) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { tasks } = getState();
    const task = tasks.find((task) => task.id === id)!;

    try {
        const { data } = await updateTaskApi({ ...task, completed });
        dispatch(setTasks(data));
    } catch {
        throw Error('Error ...');
    }
};

const editTask = (task: TaskType) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await updateTaskApi(task);
        dispatch(setTasks(data));
    } catch {
        throw Error('Error ...');
    }
};

const deleteTask = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await deleteTaskApi(id);
        dispatch(setTasks(data));
    } catch {
        throw Error('Error ...');
    }
};

export default {
    getTasks,
    addTask,
    toggleTask,
    editTask,
    deleteTask,
};
