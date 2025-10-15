import { useActions } from '../../store';
import Popup from './Popup';

interface Props {
    id: string;
    onClose: () => void;
}

export const DeletePopup = ({ id, onClose }: Props) => {
    const { deleteTask } = useActions();

    const handleConfirm = () => {
        deleteTask(id);
    };

    return (
        <Popup title='Delete Task' onClose={onClose} confirm={{ label: 'DELETE', onClick: handleConfirm }}>
            <div>Are you sure?</div>
        </Popup>
    );
};
