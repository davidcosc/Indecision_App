import React from 'react';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: ['1', '2'],
        selectedOption: undefined,
    };
    pickOption = () => {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[optionIndex];
        this.setState(() => ({selectedOption: option,}));
    };
    clearOptions = () => {
        this.setState(() => ({options: [],}));
    };
    closeSelectedOptionModal = () => {
        this.setState(() => ({selectedOption: undefined,}));
    };
    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove)}));
    };
    render() {
        return (
            <div>
                <Header/>
                <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption} clearOptions={this.clearOptions}/>
                <OptionModal selectedOption={this.state.selectedOption} closeSelectedOptionModal={this.closeSelectedOptionModal}/>
                <Options options={this.state.options} removeOption={this.removeOption}/>
                <AddOption/>
            </div>
        );
    }
}










































// import React from 'react';
// import Header from './Header';
// import Action from './Action';
// import OptionModal from './OptionModal';
// import Options from './Options';
// import AddOption from './AddOption';
//
// export default class IndecisionApp extends React.Component {
//     state = {
//         options: [],
//         selectedOption: undefined,
//     };
//     pickOption = () => {
//         const optionIndex = Math.floor(Math.random() * this.state.options.length);
//         const option = this.state.options[optionIndex];
//         this.setState(() => ({selectedOption: option,}));
//     };
//     clearOptions = () => {
//         this.setState(() => ({options: [],}));
//     };
//     clearSelectedOption = () => {
//         this.setState(() => ({selectedOption: undefined,}));
//     };
//     removeOption = (optionToRemove) => {
//         this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove),}));
//     };
//     addOption = (option) => {
//         if(!option) {
//             return 'Empty input is not an option.';
//         } else if(this.state.options.indexOf(option) > -1) {
//             return 'Duplicate options are not allowed.';
//         }
//         this.setState((prevState) => ({options: prevState.options.concat(option),}));
//     };
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('options');
//             const options = JSON.parse(json);
//             if(options.length === 0) {
//                 return;
//             }
//             this.setState(() => ({options: options,}));
//         } catch(e) {
//             //Do nothing
//         }
//     };
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.options.length === this.state.options.length) {
//             return;
//         }
//         const json = JSON.stringify(this.state.options);
//         localStorage.setItem('options', json);
//     };
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption} clearOptions={this.clearOptions}/>
//                 <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
//                 <Options options={this.state.options} removeOption={this.removeOption}/>
//                 <AddOption addOption={this.addOption}/>
//             </div>
//         );
//     }
// }