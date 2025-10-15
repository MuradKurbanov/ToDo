import { ChangeEvent, useState } from 'react';

import { useActions } from '../../store';
import type { TaskType } from '../../types';
import { DeletePopup, EditPopup, InfoPopup } from '../popups';
import styles from './Task.module.scss';

interface Props {
    task: TaskType;
}

const Task = ({ task }: Props) => {
    const [popup, setPopup] = useState<'delete' | 'create' | 'edit' | 'info' | null>(null);
    const { toggleTask } = useActions();

    const handleClosePopup = () => {
        setPopup(null);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        toggleTask(task.id, e.target.checked);
    };

    return (
        <div className={styles.task}>
            <div className={styles.left}>
                <input name='completed' type='checkbox' checked={task.completed} onChange={handleChange} />
                <span className={task.completed ? styles.completed : null}>{task.title}</span>
            </div>

            <div className={styles.right}>
                <svg
                    className={styles.icon}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    onClick={() => setPopup('info')}>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                </svg>

                <svg
                    className={styles.icon}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    onClick={() => setPopup('edit')}>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                </svg>

                <svg
                    className={styles.icon}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    onClick={() => setPopup('delete')}>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z' />
                </svg>
            </div>

            {popup === 'info' && <InfoPopup task={task} onClose={handleClosePopup} />}

            {popup === 'edit' && <EditPopup task={task} onClose={handleClosePopup} />}

            {popup === 'delete' && <DeletePopup id={task.id} onClose={handleClosePopup} />}
        </div>
    );
};

export default Task;
