import React,{Component} from 'react'
import './Bout.css'
import {connect} from 'react-redux'
import {getPro} from '../../store/actions/bout'
import axios from 'axios'
import Boutchild from './Boutchild/Boutchild.jsx'

import BScroll from 'better-scroll'


class Bout extends Component{
    constructor(props){
        super(props)
        this.state={
            scroll:null,
            crr:[],
            frr:null
        }
    }
    componentDidMount(){
        let {dispatch} =this.props;
        axios.get('/api/provinceCity').then(data=>{
            dispatch(getPro(data.data))
        })
        let options={
            scrollY:true,
            click:true
        }
        console.log(this.refs.left,'mmmsss')
        let left=this.refs.left;
        let cont=this.refs.cont;
        let righ=this.refs.righ;
        this.setState({
            scroll:new BScroll(left,options)
        })
        new BScroll(cont,options)
        new BScroll(righ,options)
    }
    getlists(id){//根据子组件传来的id来判断省份下的城市
        let {boutlist}=this.props;
        let mn=boutlist.city
        for(var item in mn){
            if(item==id){
                this.setState({
                    crr:mn[item]
                })
            }
        }
    }
    click(index,e){//点击右侧的元素ABCD。。。
      let later=[];
      for(let i=0;i<document.querySelectorAll('.mm').length;i++){//右侧的省份
         later.push(document.querySelectorAll('.mm')[i].offsetTop)
      }
      this.state.scroll.scrollTo(0,-later[index],1000) 
      let kl=document.querySelectorAll('.right')[0].querySelectorAll('p')
      kl.forEach((item,index)=>{
          e.target.className='write',
          item.className=''
      })
    }
    getText(text){//点击城市进行保存
        localStorage.setItem('baocun',text)
    }
    gof(){//点击返回
        let {history}=this.props;
        history.push('/buy')
    }
    render(){
        let {boutlist}=this.props;
        let {crr,drr}=this.state;
        return (
            <div className='boxs'>
                 <div className="head" onClick={this.gof.bind(this)}>
                    <span>选择上牌城市</span>
                    <i className='icon iconfont icon-xiangzuo'></i>
                </div>
                <div className="centent">
                    <div className="left" ref='left'>
                        <div className="kl">
                         {
                            boutlist != null && boutlist.provinceArr.map((item, index) => {
                                return (
                                    <div className='mm' key={index}>
                                    <Boutchild {...item} getlist={this.getlists.bind(this)}></Boutchild>
                                </div>
                                )
                            })
                        } 
                        </div>
                    </div>
                   <div className="content_cen" ref='cont'>
                       <div className="con">
                        {
                            crr.map((item,index)=>{
                                return (
                                    <p key={index} className='pp' onClick={()=>this.getText(item.name)}>{item.name}</p>
                                )
                            })
                        } 
                        </div>
                   </div>
                   <div className="right" ref='righ'>
                       <div>
                        {
                            boutlist!=null&&boutlist.provinceArr.map((item,index)=>{
                                return (
                                    <p key={index} onClick={this.click.bind(this,index)}>{item.letter}</p>
                                )
                            })
                        }
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    //console.log(state.bout.datas,'dm')
    return {
        boutlist:state.bout.datas
    }
}
export default connect(mapStateToProps)(Bout)