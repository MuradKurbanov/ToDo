import { TaskType } from '../types';

const getFromStorage = (): TaskType[] => {
    const storage = localStorage.getItem('tasks') ?? '[]';

    return JSON.parse(storage);
};

const writeToStorage = (tasks: TaskType[]): TaskType[] => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    return tasks;
};

export const getTasksApi = () => {
    return new Promise<{ data: TaskType[] }>((resolve) => {
        const tasks = getFromStorage();

        return resolve({ data: tasks });
    });
};

export const addTasksApi = (newTask: TaskType) => {
    return new Promise<{ data: TaskType[] }>((resolve) => {
        const tasks = getFromStorage();
        writeToStorage([newTask, ...tasks]);
        const updated = getFromStorage();

        return resolve({ data: updated });
    });
};

export const updateTaskApi = (task: TaskType) => {
    return new Promise<{ data: TaskType[] }>((resolve) => {
        const tasks = getFromStorage();
        const updated = tasks.map((item) => (item.id === task.id ? task : item));
        writeToStorage(updated);

        return resolve({ data: updated });
    });
};

export const deleteTaskApi = (id: string) => {
    return new Promise<{ data: TaskType[] }>((resolve) => {
        const tasks = getFromStorage();
        const updated = tasks.filter((item) => item.id !== id);
        writeToStorage(updated);

        return resolve({ data: updated });
    });
};
