import React from 'react';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
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
        this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove),}));
    };
    addOption = (option) => {
        if(!option) {
            return 'You need to enter an option to add it.';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Option already exists.';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option),}));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options.length === 0) {
                return;
            }
            this.setState(() => ({options: options,}));
        } catch(e) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.options.length === prevState.options.length) {
            return;
        }
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
    render() {
        return (
            <div>
                <Header title="IndecisionApp v6." subtitle="Put your life in the hands of a computer."/>
                <div className="container">
                    <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption}/>
                    <div className="widget">
                        <Options hasOption={this.state.options.length > 0} options={this.state.options} removeOption={this.removeOption} clearOptions={this.clearOptions}/>
                        <AddOption addOption={this.addOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} closeSelectedOptionModal={this.closeSelectedOptionModal}/>
            </div>
        );
    }
}