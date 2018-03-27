import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal isOpen={!!props.selectedOption}>
            <h1>Go with option {props.selectedOption}.</h1>
            <button onClick={props.closeOptionModal}>Close.</button>
        </Modal>
    );
};
export default OptionModal;
