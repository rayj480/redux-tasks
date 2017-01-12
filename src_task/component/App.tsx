import * as React from 'react';
import {createStore} from 'redux';
import {AddTask, ViewTask} from '../containers';

export default class App extends React.Component<any, any> {
    render(): JSX.Element {
        return (<div>
            <ViewTask />
        </div>);
    }
}
