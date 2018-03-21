import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
        }
        this.pickOption = this.pickOption.bind(this);
        this.clearOptions = this.clearOptions.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.addOption = this.addOption.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(!options) {
                return;
            }
            this.setState(() => ({options: options,}))
        } catch(e) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    pickOption() {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[optionIndex];
        alert('Pick option ' + option);
    }
    clearOptions() {
        this.setState(() => ({options: [],}));
    }
    removeOption(optionToRemove) {
        this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove),}));
    }
    addOption(option) {
        if(!option) {
            return 'Empty input is not an option!';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Option already exists!';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option),}));
    }
    render() {
        return (
            <div>
                <Header/>
                <Action hasOptions={(this.state.options.length > 0)} pickOption={this.pickOption} clearOptions={this.clearOptions}/>
                <Options options={this.state.options} removeOption={this.removeOption}/>
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: [],
}