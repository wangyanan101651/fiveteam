import React, { Component } from 'react';
import './CityList.css'
import axios from 'axios'
import { connect} from 'react-redux'
import { homelist } from "../../store/action/homelist";
import Child from './Child/Child.jsx'


const className = 'CityList'
class CityList extends Component {
  constructor () {
    super()
    this.state = {
      cityUl: [{ city: "北京市"}]
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    axios.get("/api/city")
    .then(res => {
      const list = res.data;
      dispatch(homelist(list))
    })
    .catch(e => {
      throw Error(e)
    })
  }
  goback(){
    const {history} = this.props
    history.go(-1)
  }
  getgive(v,e) {
    if(e.target.className){
      e.target.className = ''
      this.foreach(v)
    }else{
      e.target.className = 'active'
      const {cityUl} = this.state;
      cityUl.push({city:v,dom: e.target})
      this.setState ({cityUl})
    }
  }
  delCity(v,e){
    this.foreach(v)
  }
  foreach(v){
    const {cityUl} = this.state;
    cityUl.forEach((val,ind) => {
      if(val.city == v){
        cityUl.splice(ind,1);
        if(val.dom) {
          val.dom.className = ''
        }
      }
    })
    this.setState({cityUl})
  }
  Cards(){
    const {history} = this.props;
    history.push('/cards')
  }
  render () {
    const {homelist} = this.props;
    const {cityUl} = this.state;
    return (
      <div className = {className}>
        <div className= 'city'>
          <span onClick = {this.goback.bind(this)}>返回</span>   
          <span>|</span>  
          <span>选择城市</span>
        </div>
        <div className='pai'><span>您的上牌地址</span><span onClick = {this.Cards.bind(this)}> > </span></div>
        <div>您选择城市</div>
        <div>
          {
            cityUl.map((item,index) => {
              return (
                <span onClick={this.delCity.bind(this,item.city)} key={index}>{item.city}</span>
              )
            })
          }
        </div>
        <div>
          {
            homelist!= null && homelist.map((item,idx) => {
              return (
                <div key = {idx}>
                  <h3>{item.letter}</h3>
                  {
                    item.city.map((item1,index) => {
                      return (
                          <span onClick={this.getgive.bind(this,item1.name)} key={index}>{item1.name}</span>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    homelist:state.homelist.homelist
  }
}

export default connect(mapStateToProps)(CityList)
