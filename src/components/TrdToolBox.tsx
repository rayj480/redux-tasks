import * as React from 'react';
import {Panel, PanelType} from 'office-ui-fabric-react';
import {ITrdToolBoxProps} from '../interfaces';
import TrdToolSettings from './TrdToolSettings';
import {ShowSearch, SetSearch} from '../containers';


export class TrdToolBox extends React.Component<ITrdToolBoxProps, any> {

    constructor(props, state) {
        super(props);

        this.state = {
            settingsIsOpen: false, 
            searchIsOpen: false
        };
    }
    

    private _openSettingsPanel() {
        this.setState({
            settingsIsOpen: true
        });
    }

    private _openSearchPanel() {
        this.setState({
            searchIsOpen: true
        });
    }

    private _closeSearchPanel() {
        this.setState({
            searchIsOpen: false
        });
    }

    private _closeSettingsPanel() {
        this.setState({
            settingsIsOpen: false
        });
    }

    render(): JSX.Element {
        return (
            <div className="ms-Grid-row trd-toolbox">
                <div className="ms-Grid-col ms-u-sm3">
                    <i className="ms-Icon ms-Icon--Settings ms-font-xxl trd-tool" onClick={this._openSettingsPanel.bind(this)}></i>
                    <Panel type={PanelType.medium} isOpen={this.state.settingsIsOpen} headerText="Paramètres" onDismiss={this._closeSettingsPanel.bind(this)} >
                        <div>
                            <SetSearch />
                        </div>
                    </Panel>
                </div>
                <ShowSearch />
                <div className="ms-Grid-col ms-u-sm3">
                    <i className="ms-Icon ms-Icon--OutlookLogo ms-font-xxl trd-tool"></i>
                </div>
                <div className="ms-Grid-col ms-u-sm3">
                    <i className="ms-Icon ms-Icon--Calendar ms-font-xxl trd-tool"></i>
                </div>
            </div>
        );
    }
}
