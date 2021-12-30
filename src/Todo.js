import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task,
        }
    }

    handleRemove = (evt) => {
        this.props.remove(this.props.id)
    }

    toggleEdit = (evt) => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleUpdate = (evt) => {
        evt.preventDefault()
        this.props.update(this.props.id, this.state.task)
        this.setState({isEditing: false})
    }

    handleToggle = (evt) => {
        this.props.toggleCompletion(this.props.id)
    }

    render() {

        let results;

        if (this.state.isEditing) {
            results = (
                <div className="Todo" >
                    <form className="Todo-edit" onSubmit={this.handleUpdate}>
                        <input type="text" placeholder="edit Todo" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button type="submit">Todo</button>
                    </form>
                </div>
            )
        } else {
            results = (
                <div className="Todo" >
                    <div  className="div-todo-task">
                      <li onClick={this.handleToggle} className={this.props.isCompleted ? "Todo-Task completed" : "Todo-Task"}>{this.props.task}</li>  
                    </div>
                    
                    <div className="Todo-buttons">
                        <button onClick={this.handleToggle} className="editbuttons" >Done</button>
                        <button onClick={this.toggleEdit } className="editbuttons">Edit</button>
                        <button onClick={this.handleRemove} className="editbuttons">Delete</button>
                    </div>
                </div>
            )
        }
        //className={this.props.isCompleted ? "Todo-Task completed" : "Todo-Task"}

        return (
            results
        )
    }
}
