import {TrdSearchIcon} from '../components/TrdSearchIcon';
import TrdSetSearch from '../components/TrdSetSearch';
import {toggleSetting} from '../actions';
const connect = require('react-redux').connect;

export const ShowSearch = connect(
    (state) => {
        return {
            isActivated: state.activated
        }
    },null
)(TrdSearchIcon);

export const SetSearch = connect(
    (state) => {
        return {
            isActivated: state.activated,
            id: state.id
        }
    },  
    (dispatch) => {
        return {
            onToggleClick(id) {
                dispatch(toggleSetting(id));
            } 
        }
})(TrdSetSearch);