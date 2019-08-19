import React from 'react';
import {addAction,delAction,itemAction} from '../store/actionCreater'
import {ADD_ITEM,DEL_ITEM} from '../store/actionTypes'
// import TodoListUI from './views/TodoListUI'
// import {getuser} from '../api/user'
import {Input,Button,List} from 'antd'
import { connect } from 'react-redux'
// import store from '../store'
import '../styles/index.css'

const TodoList =(props)=>{
    let {list,inputValue,changeValue,addItem,delItem} = props
        return ( 
        <div className="margin">
        <div className="w500">
             <Input 
               placeholder={inputValue}
               value={inputValue}
               onChange={changeValue}
             />
         </div>   
       <div className="w500">
          <Button className="margin" onClick={addItem}>添加</Button>
       </div>
     <div className="margin w300">
         <List
          bordered
          dataSource={list}
          renderItem={(item) => (
            <List.Item 
             onClick={(index)=>delItem(index)}
             >{item}</List.Item>)}
         >
         </List>
     </div>
     </div>
       );
}
    
 
const stateToProps=(state)=>{
    return {
       inputValue:state.inputValue,
       list:state.list
    }
}

const dispatchToProps=(dispatch)=>{
    return {
        changeValue(e){
            let action = {
                type:ADD_ITEM,
                value:e.target.value
            }
            dispatch(action)
        },
        addItem(){
            const action = addAction()
            dispatch(action)
        },
        delItem(index){
            let action = {
                type:DEL_ITEM,
                index
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList) 