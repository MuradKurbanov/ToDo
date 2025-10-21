import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './Popup.module.scss';

interface Props {
    title: string;
    confirm?: {
        label: string;
        onClick: () => void;
    };
    onClose: () => void;
    children: ReactNode;
}

const Popup = ({ title, onClose, confirm, children }: Props) => {
    const node = document.getElementById('popup-root');

    if (!node) {
        console.error('Element #popups-root not found. The PopUp cannot be rendered through a Portal.');

        return null;
    }

    const handleConfirm = () => {
        confirm?.onClick();
        onClose();
    };

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>

                <div className={styles.content}>{children}</div>

                <div className={styles.footer}>
                    <button className={styles.empty} onClick={onClose}>
                        CANCEL
                    </button>
                    {confirm && <button onClick={handleConfirm}>{confirm.label}</button>}
                </div>
            </div>
        </div>,
        node
    );
};

export default Popup;
