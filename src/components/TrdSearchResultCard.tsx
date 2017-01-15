import * as React from 'react'; 

export interface ITrdSearchResultCardProps {
    value:string;
}

export class TrdSearchResultCard extends React.Component<ITrdSearchResultCardProps, any> {

    constructor(props){
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <span>{this.props.value}</span>
            </div>
        )
    }
}