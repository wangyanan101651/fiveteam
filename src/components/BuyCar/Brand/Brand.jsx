import React, { Component } from 'react';
import './Brand.css'
import axios from 'axios'
import { connect} from 'react-redux'
import { carclass } from "../../../store/action/carclass";

const className = 'Brand'
class Brand extends Component {
  constructor () {
    super()
  }
  componentDidMount(){
    const {dispatch} = this.props
    axios.get('/api/carClass')
    .then((res) => {
      const carClass = res.data
      dispatch(carclass(carClass))
    })
  }
  CarBrand(ite){
    console.log(ite)
  }
  render () {
    const { carclass } = this.props
    return (
      <div className = {className}>
        {
          carclass!= null && carclass.map((item,index) => {
            return (
              item.map((ite,idx) =>{
                return (
                  <p key={idx} onClick = {this.CarBrand.bind(this,ite)}>{ite.carClass}</p>
                )
              })
            )                                                                 
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    carclass:state.carclass.carclass
  }
}


export default connect(mapStateToProps)(Brand)
