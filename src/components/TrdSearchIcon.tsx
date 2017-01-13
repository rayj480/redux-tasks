import * as React from 'react'; 

interface ITrdSearchIconProps{
    isActivated:boolean;
}


export class TrdSearchIcon extends React.Component<ITrdSearchIconProps, any> {

    constructor(props){
        super(props);
    }

    render(): JSX.Element {

        let icon = null;
        if(this.props.isActivated){
            icon = <i className="ms-Icon ms-Icon--Search ms-font-xxl trd-tool"></i>
        }
        return (
            <div className="ms-Grid-col ms-u-sm3">
                {icon}
            </div>
        )
    }
}