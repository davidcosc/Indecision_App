import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    };
    handleOnSubmitOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        //const error = this.props.addOption(option);
        e.target.elements.option.value = '';
    };
    render() {
        return (
            <div>
                {!!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmitOption}>
                    <input type="text" name="option"/>
                    <button>Add option.</button>
                </form>
            </div>
        );
    }
}




































// import React from 'react';
//
// export default class AddOption extends React.Component {
//     state = {
//         error: undefined,
//     };
//     handleSubmitOption = (e) => {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.addOption(option);
//         this.setState(() => ({error: error,}));
//         e.target.elements.option.value = '';
//     };
//     render() {
//         return (
//             <div>
//                 {!!this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleSubmitOption}>
//                     <input type="text" name="option"/>
//                     <button>Add option.</button>
//                 </form>
//             </div>
//         );
//     };
// };