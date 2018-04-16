import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.hasOption} onClick={props.pickOption}>Pick option.</button>
        <button disabled={!props.hasOption} onClick={props.clearOptions}>Clear options.</button>
    </div>
);
Action.defaultProps = {
    hasOption: false,
};
export default Action;





































// import React from 'react';
//
// const Action = (props) => (
//     <div>
//         <button disabled={!props.hasOption} onClick={props.pickOption}>Pick option.</button>
//         <button disabled={!props.hasOption} onClick={props.clearOptions}>Clear options.</button>
//     </div>
// );
// Action.defaultProps = {
//     hasOption: true,
// };
// export default Action;