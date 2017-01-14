import * as React from 'react'; 
import {Toggle} from 'office-ui-fabric-react';
import {Setting} from '../types';

interface ITrdSetSearchProps {
    onToggleClick(id:string);
    settings:Setting[];
    id:string;
}

export default class TrsSetSearch extends React.Component<ITrdSetSearchProps, any> {

    render(): JSX.Element {
        // console.log(this.props);
        const toggles = this.props.settings.map(t => {
        return <Toggle key={t.id} label={t.title} checked={t.activated} onChanged={(checked) => {this.props.onToggleClick(t.id);}} />
        });
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col">
                    {toggles}
                </div>
            </div>
        )
    }
}
