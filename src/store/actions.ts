import { TaskType } from '../types';
import main from './slice';

const { setTasks } = main.actions;

const getTasks = () => async (dispatch) => {
    try {
        const tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks')) ?? [];
        dispatch(setTasks(tasks));
    } catch {
        throw Error('Error ...');
    }
};

const addTask = (newTask: TaskType) => async (dispatch) => {
    try {
        const tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks')) ?? [];
        const updated = [newTask, ...tasks];

        localStorage.setItem('tasks', JSON.stringify(updated));
        dispatch(setTasks(updated));
    } catch {
        throw Error('Error ...');
    }
};

const toggleTask = (id: string, completed: boolean) => async (dispatch) => {
    try {
        const tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks')) ?? [];
        const updated = tasks.map((item) => (item.id === id ? { ...item, completed } : item));

        localStorage.setItem('tasks', JSON.stringify(updated));
        dispatch(setTasks(updated));
    } catch {
        throw Error('Error ...');
    }
};

const editTask = (task: TaskType) => async (dispatch) => {
    try {
        const tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks')) ?? [];
        const updated = tasks.map((item) => (item.id === task.id ? task : item));

        localStorage.setItem('tasks', JSON.stringify(updated));
        dispatch(setTasks(updated));
    } catch {
        throw Error('Error ...');
    }
};

const deleteTask = (id: string) => async (dispatch) => {
    try {
        const tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks')) ?? [];
        const updated = tasks.filter((item) => item.id !== id);

        localStorage.setItem('tasks', JSON.stringify(updated));
        dispatch(setTasks(updated));
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
