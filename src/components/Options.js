import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {props.options.length === 0 && <p>Enter some options to begin.</p>}
        {props.options.map((option) => <Option key={option} option={option}/>)}
    </div>
);
export default Options;


































// import React from 'react';
// import Option from './Option';
//
// const Options = (props) => (
//     <div>
//         {(props.options.length === 0) && <p>Enter a few options to get started.</p>}
//         {props.options.map((option) => <Option key={option} option={option} removeOption={props.removeOption}/>)}
//     </div>
// );
// Options.defaultProps = {
//     options: [],
// };
// export default Options;