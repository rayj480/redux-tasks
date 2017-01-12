import {TypeAction, addtodo, toggletodo, Actions} from '../actions';
import {combineReducers} from 'redux';

type Task = {
    title?: string, 
    completed?: boolean
}

const tasktodo = (state: Task = {}, action: TypeAction): Task => {
    switch (action.type) {
        case Actions.CHANGE_TODO:
            if (state.title === action.title) {
                return {
                    title: state.title, 
                    completed: !state.completed
                };
            }
            return {};
        case Actions.ADD_TODO:
            return {
                title: state.title
            };
        default:
            return state;
    }
};

const tasklist = (state: Task[] = [], action: TypeAction): Task[] => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return state.map((t: Task): Task => {
                return task(t, action);
            });
        case Actions.CHANGE_TODO:
            return state.map((t: Task): Task => {
                return task(t, action);
            });
        default:
            return state;
    }
};

export let task = combineReducers({tasklist});
