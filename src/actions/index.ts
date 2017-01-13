import {SettingAction} from '../types';

export const toggleSetting = (pId: number) => {
    return {
        type: 'TOGGLE_SETTING', 
        id: pId
    }
};

