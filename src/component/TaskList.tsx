import * as React from 'react'; 
import {Task} from './Task';

type CompletedTask = {title?: string, completed?: boolean};
type TaskListProps = { task: CompletedTask[] };

export class TaskList extends React.Component<TaskListProps, {}> {

    constructor(props: TaskListProps) {
        super(props);
    }

    render(): JSX.Element {
        let listOfTask = this.props.task.map((t: CompletedTask) => {
            return <Task title={t.title} completed={t.completed} />;
        }); 
        return (<div>{listOfTask}</div>);
    }
}
