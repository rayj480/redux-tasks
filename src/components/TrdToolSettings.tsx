import * as React from 'react'; 
import {Toggle} from 'office-ui-fabric-react';
import {IToolsSettingsProps} from '../interfaces';

export default class TrdToolSettings extends React.Component<IToolsSettingsProps, any> {

    constructor(props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col">
                    <Toggle label="Activer la recherche" checked={this.props.activated} />
                </div>
            </div>
        )
    }
}