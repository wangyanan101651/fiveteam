import React, { Component } from 'react';
import './Sort.css'
import axios from 'axios'
import { connect} from 'react-redux'
import { carclass } from "../../../store/action/carclass";

const className = 'Sort'
class Sort extends Component {
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
  render () {
    const { carclass } = this.props
    return (
      <div className = {className}>
        {
          carclass!= null && carclass.map((item,index) => {
            return (
              item.map((ite,idx) =>{
                  return (
                    ite.carList.map((item1,ind) => {
                      return (
                        item1.price != '' ?
                        <div className='carprice' key={ind}>
                          <p>{item1.carName}</p>
                          <p>{item1.price}</p>
                        </div> : ''
                      )
                    })
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


export default connect(mapStateToProps)(Sort)
