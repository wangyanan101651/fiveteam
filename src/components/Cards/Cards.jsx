import React, { Component } from 'react';
import './Cards.css'
import axios from 'axios'
import { connect} from 'react-redux'
import {cardslist} from '../../store/action/cardslist'
import BScroll from 'better-scroll';

const className = 'Cards';
class Cards extends Component {
  constructor () {
    super()
    this.state = {
      id:null,
      list:[],
      scroll: null,
      ind:0
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    axios.get("/api/provinceCity")
    .then(res => {
      const carlist = res.data;
      dispatch(cardslist(carlist))
    })
    .catch(e => {
      throw Error(e)
    })
    const options = {
      scrollY: true, // 因为scrollY默认为true，其实可以省略
      click: true
    }

    let left = this.refs.left;
    this.setState({
      scroll: new BScroll(left, options)
    })

  }
  goback(){
    const {history} = this.props
    history.go(-1)
  }
  indexClick(item,e){
    const citylist = this.props.cardslist.city
    for (var ite in citylist) {
      if(ite==item.id){
        this.setState({list:citylist[ite]})
      }
    }
  }
  scrollClick (index) {
    this.setState({
      ind: index
    })
    let arrs = []
    let arrTop = this.refs.left.querySelectorAll('.every');
    for (let i = 0; i < arrTop.length; i++) {
      arrs.push(arrTop[i].offsetTop);
    }
    this.state.scroll.scrollTo(0, -arrs[index], 1000);
}
  render () {
    const {cardslist} = this.props
    const {list} = this.state
    // const {provinceArr}
    return (
      <div className = {className}>
        <div className= 'Card'>
          <span onClick = {this.goback.bind(this)}>返回</span>   
          <span>|</span>  
          <span>选择城市</span>
        </div>
        <div className='BigBox'>
          <div className = 'left' id="left" ref='left'>
            <div>
            {
              cardslist!= null && cardslist.provinceArr.map((item,index) => {
                return (
                  // <LeftList key={index} item = {item}></LeftList>
                  <div key={index} className='every'>
                    <h3>{item.letter}</h3>
                      {
                        item.province.map((item1,idx)=>{
                            return <p key={idx}  onClick={this.indexClick.bind(this,item1)}>{item1.name}</p>
                        })
                      }
                  </div>
                )
              })
            }
            </div>
          </div>
          <div className = 'center'>
            {
              list.map((item,index) => {
                return (
                  <p key={index}>{item.name}</p>
                )
              })
            }
          </div>
          <div className='right'>
            {
                cardslist!= null && cardslist.provinceArr.map((item,index)=>{
                    return <p key={index} onClick={this.scrollClick.bind(this,index)}>{item.letter}</p>//
                })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    cardslist:state.cardslist.cardslist
  }
}

export default connect(mapStateToProps)(Cards)
