import { ChangeEvent, useEffect, useState } from 'react';

import EmptyImg from '../assets/empty.svg';
import { useActions, useSelector } from '../store';
import styles from './App.module.scss';
import { AddPopup } from './popups';
import Task from './task';

const init_tasks = [
    { id: 1, title: 'Task 1', description: 'description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'description 2', completed: true },
    { id: 3, title: 'Task 3', description: 'description 3', completed: false },
    { id: 4, title: 'Task 4', description: 'description 4', completed: true },
    { id: 5, title: 'Task 5', description: 'description 5', completed: false },
];

const App = () => {
    const { tasks } = useSelector();
    const { getTasks } = useActions();
    const [filtered, setFiltered] = useState(init_tasks);
    const [isOpen, setOpen] = useState(false);

    const handleFilterTasks = (e: ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value.toLowerCase();

        setFiltered(tasks.filter(({ title }) => title.toLowerCase().includes(search)));
    };

    useEffect(() => {
        setFiltered(tasks);
    }, [tasks]);

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className={styles.container}>
            <h1>ToDo</h1>

            <input name='search' placeholder='Search task...' onChange={handleFilterTasks} />

            <div className={styles.list}>
                {filtered.length === 0 ? (
                    <img src={EmptyImg} alt='Empty image' />
                ) : (
                    filtered.map((task) => <Task key={task.id} task={task} />)
                )}
            </div>

            <div className={styles.footer}>
                <div className={styles.circle}>
                    <svg
                        className={styles.icon}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        onClick={() => setOpen(true)}>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
                    </svg>
                </div>
            </div>

            {isOpen && <AddPopup onClose={() => setOpen(false)} />}
        </div>
    );
};

export default App;
