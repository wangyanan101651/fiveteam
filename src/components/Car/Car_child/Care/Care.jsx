import React,{Component} from 'react'
import './Care.css'
class Care extends Component{
    low(num){
        console.log(num)
    }
    render(){
        return (
            <div className='m'>
                <p onClick={()=>this.low(1)}> <span> 价格最低</span></p>
                <p onClick={()=>this.low(-1)}> <span>价格最高</span> </p>
            </div>
        )
    }
}
export default Care