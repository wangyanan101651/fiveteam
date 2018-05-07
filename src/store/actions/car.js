
export const getCarlist=(data)=>{
    return {
         type:'GET_CAR',
         data
    }
}
export const delCarlist=(name)=>{
    return {
        type:'DEL_CAR',
        name
    }
}
export const change=(txt)=>{
    return {
        type:'CHANGE_LIST',
        txt
    }
}

export const jian=()=>{
    return {
        type:'JIAN'
    }
}

export const jia=()=>{
    return {
        type:'JIA'
    }
}