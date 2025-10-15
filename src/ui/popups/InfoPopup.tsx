import type { TaskType } from '../../types';
import Popup from './Popup';
import styles from './Popup.module.scss';

interface Props {
    task: TaskType;
    onClose: () => void;
}

export const InfoPopup = ({ task, onClose }: Props) => {
    return (
        <Popup title='Information' onClose={onClose}>
            <div className={styles.inputWrapper}>
                <p>{task.title}</p>
            </div>

            <div className={styles.inputWrapper}>
                <p>{task.description}</p>
            </div>
        </Popup>
    );
};
