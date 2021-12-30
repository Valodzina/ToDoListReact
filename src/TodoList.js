import React, { Component } from 'react'
import NewTodo from './NewTodo'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

export default class TodoList extends Component {


    str = '';

    toLocal() {
        this.str = "";
        this.state.todos.forEach(el => {
            this.str = this.str + '_##_' + el.task + '_##_' + el.id + '_##_' + el.isCompleted;

        });
        localStorage.setItem('todos', this.str);


        console.log('todos:');
        console.log(localStorage.getItem('todos'));

    };




    constructor(props) {
        super(props)

        if (localStorage.getItem('todos')) {
            this.str = localStorage.getItem('todos');
            var arr = this.str.split('_##_');
            console.log(arr);
            var arrtodos = [];
            var bool = false;
            for (var i = 1; i < arr.length - 1; i = i + 3) {
                if (arr[i + 2] === "true") {
                    bool = true;
                }
                else {
                    bool = false;
                }
                arrtodos.push({ task: arr[i], id: arr[i + 1], isCompleted: bool })
            }

            this.state = {
                todos: arrtodos
            }
        }
        else {
            this.state = {
                todos: []
            }
        }

        console.log('todos:');
        console.log(localStorage.getItem('todos'));

    }

    create = (newTodo) => {
        // this.setState ((prevState, props)=> {
        //     return ({todos: [...prevState.todos, newTodo,]})
        // }, 
        // ()=> this.toLocal
        // )
        this.setState({
            todos: [...this.state.todos, newTodo,]
        },
            () => this.toLocal()
        );


    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => (t.id !== id))
        },
            () => this.toLocal()
        );


    }
    removeall = () => {
        this.setState({
            todos: []
        })
        localStorage.setItem('todos', '');
    }

    update = (id, updatedTask) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, task: updatedTask }
                }
                this.toLocal();

                return todo
            })
        },
            () => this.toLocal())
    }

    toggleCompletion = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo
            })

        },
            () => this.toLocal()
        )
        // this.toLocal();

    }

    render() {
        return (
            <div className="TodoList">
                <h1>TODO LIST ! <br /> <button className="delete_all_button" onClick={this.removeall}> delete all </button></h1>

                <ul>
                    {this.state.todos.map(t => (
                        <Todo key={t.id} task={t.task} id={t.id} remove={this.remove} update={this.update} isCompleted={t.isCompleted} toggleCompletion={this.toggleCompletion} />
                    ))}
                </ul>
                <NewTodo createTodo={this.create} />
            </div>
        )
    }
}
