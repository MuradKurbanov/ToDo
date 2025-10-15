import { ChangeEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useActions } from '../../store';
import Popup from './Popup';
import styles from './Popup.module.scss';

interface Props {
    onClose: () => void;
}

export const AddPopup = ({ onClose }: Props) => {
    const { addTask } = useActions();
    const [state, setState] = useState({ title: '', description: '', completed: false });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleConfirm = () => {
        addTask({ id: uuid(), ...state });
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
