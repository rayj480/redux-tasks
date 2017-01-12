import * as React from 'react'; 

interface TaskFormProps { OnTaskAdd(title: string): any; }

export class TaskForm extends React.Component<TaskFormProps, any> {
    render(): JSX.Element {
        return (
            <div>
                <input type="text" 
                    placeholder="Entrer la taches..." 
                    value=""/>
                <button onClick={this.props.OnTaskAdd('jonathan')}>
                    Ajouter
                </button>
            </div>
        );
    }
}
