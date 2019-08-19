import React, { Component,Fragment } from 'react';
import {addAction,delAction,itemAction,getList} from '../store/actionCreater'
import TodoListUI from './views/TodoListUI'
import store from '../store'
import '../styles/index.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.storeChange=this.storeChange.bind(this)
        this.changeValue=this.changeValue.bind(this)
        this.addItem=this.addItem.bind(this)
        this.delItem=this.delItem.bind(this)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        const action = getList()
        store.dispatch(action)
    }
    
    render() { 
        return ( 
        <Fragment>
          <TodoListUI 
            list={this.state.list}
            inputValue={this.state.inputValue}
            changeValue={this.changeValue}
            delItem={this.delItem}
            addItem={this.addItem}
          />
        </Fragment> );
    }

    changeValue(e){
        const action =itemAction (e.target.value)
        store.dispatch(action)
    }

    addItem(){
      const action = addAction()
      store.dispatch(action)
    }


    delItem(index){
        const action = delAction(index)
        store.dispatch(action)
      }


    storeChange(){
        this.setState(store.getState())
    }
}
 
export default TodoList;