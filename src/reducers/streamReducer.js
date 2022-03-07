import _ from 'lodash'


// function toObject(arr) {
//     var rv = {};
//     for (var i = 0; i < arr.length; ++i)  //used to convert arry into object 
//     return rv;
//   }
export const streamReducer = (state={},action)=>{
    switch(action.type){
        case 'FETCH_STREAMS':
            return {...state,..._.mapKeys(action.payload,'id')} //used to convert array into object
        case 'FETCH_STREAM':
            return {...state,[action.payload.id]:action.payload}
         case 'CREATE_STREAM':
            return {...state,[action.payload.id]:action.payload}
        case 'EDIT_STREAM' :
            return {...state,[action.payload.id]:action.payload}
        case 'DELETE_STREAM' :
            return _.omit(state,action.payload)
        
        default:
        return state;
    }

}