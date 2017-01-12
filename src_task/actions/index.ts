type TActions = {
    ADD_TODO: string,
    CHANGE_TODO: string
};

export const Actions: TActions = {
    ADD_TODO: 'ADD_TODO',
    CHANGE_TODO: 'TOGGLE_TODO'
};

export type TypeAction = {
    type: string, 
    title?: string, 
    completed?: boolean
};

export const addtodo = (ptitle: string): TypeAction => {
    return {
        type: Actions.ADD_TODO, 
        title: ptitle
    };
};

export const toggletodo = (ptitle: string): TypeAction => {
    return {
        type: Actions.CHANGE_TODO, 
        title: ptitle
    };
};
