import * as React from 'react'; 
import * as ReactDom from 'react-dom'; 
import App from './components/App';
import './styles/index.css';
import {createStore} from 'redux'; 
const Provider = require('react-redux').Provider;
import {settingsReducer} from './reducers';
var adal = require('./adal/adal-request.js');

let initialState = {
    settings: [
        {
            id: '1', 
            title: "search", 
            activated: true
        }, 
        {
            id: '2', 
            title: "outlook", 
            activated: true
        }, 
        {
            id: '3', 
            title: "calendar", 
            activated: true
        }
    ]
};

adal.processAdalCallback();

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer(settingsReducer, initialState);

// ajouter le reducer
// let store = createStore(settingsReducer, initialState);
//console.log(store.getState());

ReactDom.render(
    <Provider store={store}><App name="Jonathan" /></Provider>, 
    document.getElementById('root'));
