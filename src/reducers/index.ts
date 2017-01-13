import {SettingAction, Setting} from '../types';
import {combineReducers} from 'redux';


let setting = (state:SettingAction = {}, action:any) => {
    switch (action.type) {
        case "TOGGLE_SETTINGS":
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

let settings = (state = [], action:any) => {
    switch (action.type) {
        case "TOGGLE_SETTINGS":
            return state.map((t:SettingAction) => {
                setting(t, action);
            });
        default:
            return state;
    }
} 

export const settingsReducer = combineReducers({settings});
