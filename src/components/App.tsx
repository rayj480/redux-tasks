import * as React from 'react';
import {IAppProps} from '../interfaces';
import {TrdHeader} from './TrdHeader';
import {AdalConfig, AuthenticationContext, Authentication} from 'adal-ts';

export default class App extends React.Component<IAppProps, any> {


    constructor(props: IAppProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div>
                  <TrdHeader title="Intranet" />
            </div>
        );
    }
}
