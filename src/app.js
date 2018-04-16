import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/style.scss';

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);