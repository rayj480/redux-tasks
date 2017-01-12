import * as React from 'react';

type TaskProps = {
    title: string, 
    completed: boolean
}

export class Task extends React.Component<TaskProps, any> {
    constructor(props: TaskProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <span>
                    {this.props.title} : 
                    {!this.props.completed ? 'pas fait !' : 'fait !'}
                </span>
            </div>
        );
    }
}
