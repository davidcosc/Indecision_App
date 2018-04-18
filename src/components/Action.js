import React from 'react';

const Action = (props) => (
    <div>
        <button className="big-button" disabled={!props.hasOption} onClick={props.pickOption}>Pick option.</button>
    </div>
);
export default Action;