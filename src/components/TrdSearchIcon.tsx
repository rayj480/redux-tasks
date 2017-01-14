import * as React from 'react'; 
import {Setting} from '../types';

interface ITrdSearchIconProps{
    settings:Setting[];
}


export class TrdSearchIcon extends React.Component<ITrdSearchIconProps, any> {

    constructor(props){
        super(props);
    }

    render(): JSX.Element {
        const settings = this.props.settings.map((t) => {
            switch (t.title) {
                case "search":
                    return t.activated ? 
                        <i className="ms-Icon ms-Icon--Search ms-font-xxl trd-tool"></i> : null
                case "outlook":
                    return t.activated ? 
                        <i className="ms-Icon ms-Icon--OutlookLogo ms-font-xxl trd-tool"></i> : null
                case "calendar":
                    return t.activated ? 
                        <i className="ms-Icon ms-Icon--Calendar ms-font-xxl trd-tool"></i> : null
                default:
                    return null;
            }
        });
        console.log(settings);
        return (
            <div className="ms-Grid-col ms-u-sm3">
                {settings}
            </div>
        )
    }
}