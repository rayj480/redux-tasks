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
<<<<<<< HEAD
        let token = fetch("https://login.microsoftonline.com/54a23889-4ae9-4748-9ef2-8c7d92cbd61f/oauth2/authorize?client_id=74b1fa8c-19d3-4102-8ad1-073fbaeb272c&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&response_mode=query&resource=https%3A%2F%2Ftryadeconsulting.sharepoint.com%2F&state=12345", {
            method: 'GET', 
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:8080"
            }
        }).then((response:Response) => {
                console.log(response);
            });
=======
        
        
>>>>>>> 35f5bbce1cfa26d6a9cd8d138aa14222502acb6e
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