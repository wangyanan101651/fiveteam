const initalState={
    name:'dom',
    datas:null
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case 'GET_PRO':
        return {...state,datas:action.data}
    }
    return state
}
export default reducer