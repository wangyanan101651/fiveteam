const initalState={
    name:'dom',
    data:null
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case 'GET_DATA':
        return {...state,data:action.data}
    }
    return state
}
export default reducer