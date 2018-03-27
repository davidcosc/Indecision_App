import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal isOpen={!!props.selectedOption}>
            <p>{props.selectedOption}</p>
        </Modal>
    );
};
export default OptionModal;
