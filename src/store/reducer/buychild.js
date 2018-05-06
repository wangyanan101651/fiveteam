const initalState={
    name:'dom',
    brr:[{city:'北京市',dom:''}]
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case 'ADD':
       let arr= state.brr.push(action.data)
        return {...state,brr:arr}
    }
    return state
}
export default reducer