type Todo = {
    text: string,
    complete?: boolean,
    id?: number
}

type ToggleTodo = (selectedTodo) => void;

type AddTodo = (newTodo: string) => void;
type SetNewTodo = (setNewTodo : string) => void;

type RemoveTodo = (todoToRemove: children ) => void;