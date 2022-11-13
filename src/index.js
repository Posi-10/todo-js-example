import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

import './styles.css';

/* import { TodoList } from './class/todo-list.class';
import { Todo } from './class/todo.class'; */

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ));
todoList.todos.forEach( crearTodoHtml );

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

//crearTodoHtml( tarea );

// localStorage and SessionStorage

/**
 * localStorage = aguanta el reinicio de la computador o ventanas
 * sessionStorage = alreinicar se perdera la informacion 
 */

//localStorage.setItem('mi-key', 'ABC123')
//sessionStorage.setItem('mi-key', 'ABC123')

/* setTimeout( () => {

    localStorage.removeItem('mi-key');

}, 1500); */