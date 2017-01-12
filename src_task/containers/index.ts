import * as React from 'react'; 
import {addtodo} from '../actions';
import {TaskForm} from '../component/TaskForm';
import {TaskList} from '../component/TaskList';
let connect = require('react-redux').connect;



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        OnTaskAdd: (title: string) => {
            dispatch(addtodo(title));
        }
    };
};


export const AddTask = connect(null, mapDispatchToProps)(TaskForm);

export const ViewTask = connect((state: any) => {
    return { task: [...state.tasklist]}; }, null
)(TaskList);
