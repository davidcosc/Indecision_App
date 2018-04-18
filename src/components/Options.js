import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options.</h3>
            <button className="button button--link" disabled={!props.hasOption} onClick={props.clearOptions}>Clear options.</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Enter some options to get started.</p>}
        {props.options.map((option, index) => <Option key={option} option={option} count={index + 1} removeOption={props.removeOption}/>)}
    </div>
);
export default Options;