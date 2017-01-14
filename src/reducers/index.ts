import {SettingAction, Setting} from '../types';
import {combineReducers} from 'redux';


let setting = (state:SettingAction = {}, action:any) => {
    switch (action.type) {
        case "TOGGLE_SETTING":
            if(state.id === action.id){
                return {
                    id: state.id, 
                    title: state.title, 
                    activated: !state.activated
                };
            }
        default:
            return state
    }
}

let settings = (state:any = [], action:any) => {
    switch (action.type) {
        case "TOGGLE_SETTING":
            return state.map((t:SettingAction) => {
                return setting(t, action);
            });
        default:
            return state;
    }
} 

export let settingsReducer = combineReducers({settings});
