import React,{Component} from 'react'
import './Bout.css'
class Boutchild extends Component{
    constructor(){
        super()
        this.state={
        }
    }
    provice(item,e){//点击每个添加类名
         let {getlist}=this.props;//拿到父组件的函数
         getlist(item.id)//拿到省份的id，根据id显示省份下的城市
         let k=document.querySelectorAll('.kj')[0].querySelectorAll('p')//添加样式
         k.forEach((item,index)=>{
             e.target.className='kk'
             item.className=''
         })
    }
    render(){
        let {letter,province}=this.props;
        return (
            <div className='kj'>
                <h4>{letter}</h4>
                {
                   province.map((item,index)=>{
                       return (
                           <p key={index} onClick={this.provice.bind(this,item)}>{item.name}</p>
                       )
                   }) 
                }
            </div>
        )
    }
}
export default Boutchild