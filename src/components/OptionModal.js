import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal className="modal" isOpen={!!props.selectedOption} contentLabel="SelectedOptionModal" onRequestClose={props.closeSelectedOptionModal} ariaHideApp={false} closeTimeoutMs={2000}>
        <h2 className="modal__title">Go with option:</h2>
        <p className="modal__body">{props.selectedOption}</p>
        <button className="button" onClick={props.closeSelectedOptionModal}>Close.</button>
    </Modal>
);
export default OptionModal;