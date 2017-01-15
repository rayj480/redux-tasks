import * as React from 'react'; 
import {Setting} from '../types';
import {Panel, PanelType} from 'office-ui-fabric-react';
import {TrdSearchPanel} from './TrdSearchPanel';

interface ITrdSearchIconProps{
    settings:Setting[];
}

export class TrdSearchIcon extends React.Component<ITrdSearchIconProps, any> {

    constructor(props){
        super(props);
        
        this.state = {
            opened: false
        };
    }

    private _openPanel(){
        this.setState({
            opened: true
        });
    }

    private _closePanel(){
        this.setState({
            opened: false
        });
    }

    render(): JSX.Element {
        // console.log(this.props.settings)
        const settings = this.props.settings.map((t) => {
            switch (t.title) {
                case "search":
                    return t.activated ? (
                        <div className="ms-Grid-col ms-u-sm3" key={t.id}>
                            <i className="ms-Icon ms-Icon--Search ms-font-xxl trd-tool" onClick={() => this._openPanel()}></i>
                            <Panel type={PanelType.smallFluid} isOpen={this.state.opened} headerText="Search" onDismiss={() => this._closePanel()} >
                                <TrdSearchPanel />
                            </Panel>
                        </div>
                    ) : null
                case "outlook":
                    return t.activated ? (
                        <div className="ms-Grid-col ms-u-sm3" key={t.id}>
                            <i className="ms-Icon ms-Icon--OutlookLogo ms-font-xxl trd-tool"></i>
                            
                        </div>
                    ) : null
                case "calendar":
                    return t.activated ? (
                        <div className="ms-Grid-col ms-u-sm3" key={t.id}>
                            <i className="ms-Icon ms-Icon--Calendar ms-font-xxl trd-tool"></i>
                        </div>
                    ) : null
                default:
                    return null;
            }
        });
        return (
            <div>{settings}</div>
        )
    }
}