export interface IAppProps {
    name:string;
}

export interface ITrdHeaderProps{
    title:string;
}

export interface ITrdToolBoxProps {}

export interface IToolsSettingsProps {
    activated: boolean;
}

// search

export interface ISearchResult{
  PrimaryQueryResult: ISearchPrimaryQueryResult;
}

export interface ISearchPrimaryQueryResult{
  RelevantResults: ISearchRelevantResults;
}

export interface ISearchRelevantResults{
  Table: ISearchTable;
}

export interface ISearchTable{
  Rows: Array<ISearchCells>;
}

export interface ISearchCells{
  Cells: Array<ISearchProperties>;
}

export interface ISearchProperties{
  Key: string; 
  Value: string; 
}
