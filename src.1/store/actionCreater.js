import {ADD_ITEM,DEL_ITEM,ITEM,GET_List} from './actionTypes'
import {getuser} from '../api/user'
export const itemAction =(value)=> ({
        type: ITEM,
        value
 })

export const addAction =()=> ({
       type: ADD_ITEM
})

export const delAction =(index)=> ({
        type: DEL_ITEM,
        index
})

export const getListAction =(data)=> ({
        type: GET_List,
        data
})

export const getList =()=> {
       return (dispatch)=>{
          getuser('/mock/5d5a7c5501308f6222a3641f/list')
                .then(res=>{
                const data = res.list
                const action = getListAction(data)
                dispatch(action)
                })
        } 
}