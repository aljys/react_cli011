import React from 'react';
import {Input,Button,List} from 'antd'

const TodoListUI = (props) =>{
     return (
        <div className="margin">
        <div className="w500">
             <Input 
                 placeholder={props.inputValue}
                 value={props.inputValue}
                 onChange={props.changeValue}
             />
         </div>   
       <div className="w500">
          <Button onClick={props.addItem} className="margin">添加</Button>
       </div>
     <div className="margin w300">
         <List
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (
            <List.Item 
             onClick={props.delItem(index)}
             >{item}</List.Item>)}
         >
         </List>
     </div>
     </div>
     )
}

export default TodoListUI