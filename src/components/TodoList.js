import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addAction,delAction,itemAction,getListAction} from '../store/actionCreater'
import {Input,Button,List} from 'antd'
import {getuser} from '../api/user'
import store from '../store'
import '../styles/index.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    componentDidMount() {
        this.props.getList()
    }
    render() { 
        let {inputValue,changeItem,addItem,delItem,list} = this.props
        return ( 
            <div>
                <div className="margin">
                <div className="w500">
                    <Input value={inputValue}
                        onChange={changeItem.bind(this)}
                    /> 
                </div>
                <div className="w500 margin">
                    <Button onClick={addItem}>添加</Button>
                </div>
                
                </div>
                <div className="margin w300">
                   <List
                    bordered
                    dataSource={list}
                    renderItem={(item,index) => (
                        <List.Item 
                           onClick={()=>{
                             delItem(index)
                           }
                        }
                        >{item}</List.Item>)}
                    >
                    </List>
                    
                </div>
            </div>
         );
    }
    
}
 
const stateToProps=(state)=>{
    return {
       inputValue:state.inputValue,
       list:state.list,
    }
}
const dispatchToProps=(dispatch)=>{
    return {
        changeItem(e){
            const action =itemAction (e.target.value)
            dispatch(action)
        },
        addItem(){
            const action =addAction ()
            dispatch(action)
        },
        delItem(index){
            const action =delAction(index)
            dispatch(action)
        },
        getList(){
             getuser('/mock/5d5a7c5501308f6222a3641f/list')
               .then(res=>{
                 const data = res.list
                 const action = getListAction(data)
                 dispatch(action)
                 })
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList)