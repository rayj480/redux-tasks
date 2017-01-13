import * as React from 'react'; 
import {Toggle} from 'office-ui-fabric-react';

interface ITrdSetSearchProps {
    onToggleClick(id:string);
    isActivated:boolean;
    id:string;
}

export default class TrsSetSearch extends React.Component<ITrdSetSearchProps, any> {
    render(): JSX.Element {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col">
                    <Toggle label="Activer la recherche" checked={this.props.isActivated} onChange={this.props.onToggleClick(this.props.id)} />
                </div>
            </div>
        )
    }
}
