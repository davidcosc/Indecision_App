import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {!!props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);
export default Header;




































// import React from 'react';
//
// const Header = (props) => (
//     <div>
//         <h1>{props.title}</h1>
//         {!!props.title && <h2>{props.subtitle}</h2>}
//     </div>
// );
// Header.defaultProps = {
//     title: 'IndecisionApp v5.0.',
//     subtitle: 'Put your life in the hands of a computer.',
// };
// export default Header;