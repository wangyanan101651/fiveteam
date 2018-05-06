import React,{Component} from 'react'
import './Buy.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {getDate} from '../../store/actions/buy'
import Buychild from './Buychild/Buychild.jsx'
class Buy extends Component{
    constructor(){
        super()
        this.state={
            brr:[{city:'北京市',dom:''}],
            text:''
        }
    }
    componentDidMount(){
        let {dispatch}=this.props;
        axios.get('/api/city').then(data=>{
           dispatch(getDate(data.data))
        })
        this.setState({
            text:localStorage.getItem('baocun')
        })

    }
    getadd(e){
        let {brr}=this.state
        brr.forEach((item,index)=>{
            if(item.city==e.city){
                brr.splice(index,1)
            }
        })
        this.state.brr.push(e)
        this.setState({
            brr
        })
    }
    dele(items,e){
        let {brr}=this.state;
       
        if(brr.length<2) return false;
        let arrs=brr
        arrs.forEach((item,index)=>{
            if(item.city==items.city){
                arrs.splice(index,1)
            }
            if(items.dom){
                items.dom.className=''
            }
        })
        this.setState({
            brr:arrs
        })
        localStorage.setItem('er',this.state.brr[0].city)
    }
    back(){
        let {history}=this.props;
        history.push('/')
    }
    forword(){
        let {history}=this.props;
        history.push('/bout') 
    }
    render(){
        let {list}=this.props;
        let {brr,text}=this.state;
        return (
            <div className='box'>
              
                <div className="head" onClick={this.back.bind(this)}>
                    <span>选择城市</span>
                    <i className='icon iconfont icon-xiangzuo'></i>
                </div>
                  <div className='ll' onClick={this.forword.bind(this)}>
                    <span>选择上牌城市：</span><span style={{color:'red'}}>{text}</span>
                     <i className='icon iconfont icon-chevron-thin-right'></i>
                </div>
                <div className='list'>
                    <h3>您已选择的城市：</h3>
                    {
                        brr.map((item,index)=>{
                            return (
                                <span key={index} onClick={this.dele.bind(this,item)}>{item.city}</span>
                            )
                        })
                    }
                </div>
                <div className="sec">
                    {
                        list!=null&&list.map((item,index)=>{
                            return (
                                <div className="kuai" key={index}>
                                    <Buychild {...item} brr={this.state.brr} getadd={this.getadd.bind(this)}></Buychild>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
   // console.log(state,'ooooo')
    return {
        list:state.buy.data
    }
}
export default connect(mapStateToProps,null,null,{pure:true})(Buy)