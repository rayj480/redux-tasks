import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './component/App';
let Provider = require('react-redux').Provider;
import {createStore} from 'redux'; 
import {task} from './reducers/task';

const initialState = {
    tasklist: [
        {title: 'tache 2', completed: false},
        {title: 'tache 3', completed: true},
        {title: 'tache 4', completed: true},
        {title: 'tache 5', completed: false}
    ]
};

let store = createStore(task, initialState);

ReactDom.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
