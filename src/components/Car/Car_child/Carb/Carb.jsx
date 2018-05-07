import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Carb.css'
import {change} from '../../../../store/actions/car'
import axios from 'axios'
class Carb extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        axios.get('/api/lists').then(data=>{
            this.setState({
                arr:data.data
            })
           // console.log(data.data)
        })
    }
    renders(e){
        let txt=e.target.innerText
        let {dispatch,history}=this.props;
        dispatch(change(txt))
        let ps=document.querySelectorAll('.txt');
        ps.forEach((item,index)=>{
            e.target.style.color='red'
            item.style.color=''
        })
        history.push('/car/content')
    }
    render(){
        let {arr}=this.state;
        return (
            <div className='ppo'>
                 {
                     arr.map((item,index)=>{
                       return (
                           item.map((ite,ind)=>{
                               return (
                                   <p key={ind} onClick={this.renders.bind(this)} className='txt'>{ite.carClass}</p>
                               )
                           })
                       )
                   })  
                } 
            </div>
        )
    }
}

export default connect()(Carb)