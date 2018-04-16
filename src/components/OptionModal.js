import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption} contentLabel="SelectedOptionModal" onRequestClose={props.closeSelectedOptionModal} ariaHideApp={false}>
        <h2>Go with option {props.selectedOption}</h2>
        <button onClick={props.closeSelectedOptionModal}>Close.</button>
    </Modal>
);
export default OptionModal;



































// import React from 'react';
// import Modal from 'react-modal';
//
// const OptionModal = (props) => (
//     <Modal isOpen={!!props.selectedOption} onRequestClose={props.clearSelectedOption} contentLabel="OptionModal" ariaHideApp={false}>
//         <h2>Go with option {props.selectedOption}</h2>
//         <button onClick={props.clearSelectedOption}>Close.</button>
//     </Modal>
// );
// export default OptionModal;