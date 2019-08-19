import {ADD_ITEM,DEL_ITEM,ITEM,GET_List} from './actionTypes'
const defaultState={
    inputValue:'Writting something',
    list:[]
}
export default (state=defaultState,action)=>{

      if(action.type === ITEM){
        let newState= JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
      }

      if(action.type === ADD_ITEM){
           let newState= JSON.parse(JSON.stringify(state))
           newState.list.push(newState.inputValue)
           newState.inputValue=''
           return newState
      }

      if(action.type === DEL_ITEM){
        let newState= JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
      }

      if(action.type === GET_List){
        let newState= JSON.parse(JSON.stringify(state))
        newState.list=action.data
        return newState
      }
   return state
} 