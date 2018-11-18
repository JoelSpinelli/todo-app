import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    handleAdd() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefs' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}