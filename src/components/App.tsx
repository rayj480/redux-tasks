import * as React from 'react';
import {IAppProps} from '../interfaces';

export default class App extends React.Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props);
    }

    render(): JSX.Element {

        return (
            <div>
                Bonjour {this.props.name} !
            </div>

        );
    }
}
