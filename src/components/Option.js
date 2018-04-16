import React from 'react';

const Option = (props) => (
    <div>
        {props.option}
        <button onClick={() => {props.removeOption(props.option);}}>Remove.</button>
    </div>
);
export default Option;





































// import React from 'react';
//
// const Option = (props) => (
//     <div>
//         {props.option}
//         <button onClick={() => {props.removeOption(props.option);}}>Remove.</button>
//     </div>
// );
// Option.defaultProp = {
//     option: '',
// };
// export default Option;