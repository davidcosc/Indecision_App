import React from 'react';

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Enter options to pick from.</p>}
            {props.options.map((option) => <p key={option}>{option}</p>)}
        </div>
    );
};
Options.defaultProps = {
    options: [],
};
export default Options;
























































// import React from 'react';
// import Option from './Option';
//
// const Options = (props) => {
//     return (
//         <div>
//             {(props.options.length === 0 && <p>Enter some options to get started.</p>)}
//             {props.options.map((option) => <Option key={option} option={option} removeOption={props.removeOption}/>)}
//         </div>
//     );
// }
// Options.defaultProps = {
//     options: [],
// }
// export default Options;