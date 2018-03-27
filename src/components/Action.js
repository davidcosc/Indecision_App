import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.pickOption}>Pick option.</button>
            <button disabled={!props.hasOption} onClick={props.clearOptions}>Clear options.</button>
        </div>
    );
};
export default Action;























































// import React from 'react';
//
// const Action = (props) => {
//     return (
//         <div>
//             <button disabled={!props.hasOptions} onClick={props.pickOption}>Pick option.</button>
//             <button disabled={!props.hasOptions} onClick={props.clearOptions}>Clear options.</button>
//         </div>
//     );
// }
// export default Action;