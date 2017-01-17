import * as React from 'react'; 
import {SearchBox} from 'office-ui-fabric-react'; 
import {TrdSearchResultPanel} from './TrdSearchResultPanel';
import {ISearchResult} from '../interfaces';
import * as adal from 'adal-ts';



export class TrdSearchPanel extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            searchResults: [], 
            errorMessage: null
        }
    }

    private _goSearch(newValue: any):void {
        let queryText = "https://tryadeconsulting.sharepoint.com/_api/search/query?querytext='" + newValue + "'";
        
        
        let request = fetch(queryText, {
            method: 'GET',
            headers: {
                "odata-version": "",
                "accept": "application/json;odata=verbose"
            }
        }).then((response: Response) => {
            return response.json();
        }).then((data) => {
            if(data.error){
                this.setState({
                    errorMessage: data.error.message.value
                });
            }else{
                this.setState({
                    searchResults: data.PrimaryQueryResult.RelevantResults.Table.Rows
                });
            }
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <SearchBox labelText="Object de la recherche..." onChange={(newValue) => this._goSearch(newValue)} />
                <TrdSearchResultPanel results={this.state.searchResults} error={this.state.errorMessage} />
            </div>
        )
    }
}