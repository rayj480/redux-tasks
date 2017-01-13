import * as React from 'react'; 
import {ITrdHeaderProps} from '../interfaces';
import {Image, ImageFit} from 'office-ui-fabric-react';
import {TrdToolBox} from './TrdToolBox';

export class TrdHeader extends React.Component<ITrdHeaderProps, any> {
    constructor(props: ITrdHeaderProps) {
        super(props);
    }

    render(): JSX.Element {
        // ajouter le composant TrdToolBox
        return (
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col">
                        <Image 
                            src="https://tryadeconsulting-my.sharepoint.com/personal/jonathan_cari_tryade_fr/_layouts/15/guestaccess.aspx?docid=1dad9b1a7583444dba3ee487baa28a811&authkey=ATFF0sC0b9wxEsySDsn__K4" 
                            shouldFadeIn={true} height={70} width={192}/>
                    </div>
                    <div className="ms-Grid-col">
                        <span className="ms-fontColor-blue ms-font-su">{this.props.title}</span>
                    </div>
                    <div className="ms-Grid-col ms-u-md6"></div>
                    <div className="ms-Grid-col ">
                        <TrdToolBox />
                    </div>
                </div>
            </div>
        );
    }
}