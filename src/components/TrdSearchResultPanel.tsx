import * as React from 'react';
import {ISearchCells, ISearchProperties} from '../interfaces';
import {TrdSearchResultCard} from './TrdSearchResultCard';

export interface ITrdSearchResultPanelProps {
    results:Array<ISearchCells>
    error?:string;
}

export class TrdSearchResultPanel extends React.Component<ITrdSearchResultPanelProps, any> {


    render(): JSX.Element {

        const searchResults = this.props.results.map((s:ISearchCells) => {
            var title:string;
            var ref:string;
            s.Cells.forEach((item:ISearchProperties) => {
                if (item.Key === "Title"){
                title = item.Value;
                }
            });
            return(
                <TrdSearchResultCard value={title} />
            );
        });

        return (
            <div className="trd-search-result">
                {this.props.error ? this.props.error : searchResults}
            </div>
        )
    }
}