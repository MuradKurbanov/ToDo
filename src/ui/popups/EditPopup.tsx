import { ChangeEvent, useState } from 'react';

import { useActions } from '../../store';
import type { TaskType } from '../../types';
import Popup from './Popup';
import styles from './Popup.module.scss';

interface Props {
    task: TaskType;
    onClose: () => void;
}

export const EditPopup = ({ task, onClose }: Props) => {
    const { editTask } = useActions();
    const [state, setState] = useState(task);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleConfirm = () => {
        editTask(state);
    };

    return (
        <Popup title='Edit Task' onClose={onClose} confirm={{ label: 'APPLY', onClick: handleConfirm }}>
            <div className={styles.inputWrapper}>
                <div className={styles.label}>title</div>
                <input maxLength={20} type='text' name='title' value={state.title} onChange={handleChange} />
            </div>

            <div className={styles.inputWrapper}>
                <div className={styles.label}>description</div>
                <textarea maxLength={200} name='description' value={state.description} onChange={handleChange} />
            </div>
        </Popup>
    );
};
