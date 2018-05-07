const initalState={
    name:'dom',
    carlist:null,
    minData: null
}
let crr=null
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case 'GET_CAR':
        crr=action.data
        let obj2 = [...action.data];
        let arrpush1 = []
        // 清除price为空
        obj2.forEach((item, index) => {
            item.forEach((i, inde) => {
                i.carList.forEach((j, ind) => {
                    if (j.price) {
                        arrpush1.push(j)
                    }
                })
            })
        })
        return {...state, carlist: arrpush1}
        case 'DEL_CAR'://点击删除
        let as=action.name
        let obj={...state};
        let arr=obj.carlist;
        arr.forEach((item,index)=>{
            if(item.carName==as){
                arr.splice(index,1)
            }
        })
        return {carlist:arr}
        case 'CHANGE_LIST':
        let arr1=crr
        let cd=[]
        arr1.forEach((item,index)=>{
            item.forEach((ite,ind)=>{
               if(ite.carClass==action.txt){
                   ite.carList.forEach((itemm,inds)=>{
                       if(itemm.price){
                           cd.push(itemm)
                       }
                   })
               }
            })
        })
       
      
        return {carlist:cd} 
        case 'JIAN':
        let nm={...state}.carlist;
        nm.sort((a,b)=>{
            return a.price.split('-')[0]-b.price.split('-')[0]
        })
        return {carlist:nm}
        case 'JIA':
        let mm={...state}.carlist;
        mm.sort((a,b)=>{
            return b.price.split('-')[0]-a.price.split('-')[0]
        })
        return {carlist:mm}
        default :
        return state
    }
}
export default reducer