import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cara.css'
import { delCarlist } from '../../../../store/actions/car'
class Cara extends Component {
    constructor () {
        super()
        this.state = {
            infoData: null
        }
    }
    del(name) {
        let { dispatch } = this.props;
        dispatch(delCarlist(name))
    }
    render() {
        const { carlist } = this.props;
      
        return (
            <div className='ll'>
                {
                     carlist!=null && carlist.map((item, index) => {
                        return (
                            <div className='divs' key={index}>
                                <p>{item.carName}</p>
                                <p>{item.price} <i className='icon iconfont icon-guanbi-01' onClick={()=>this.del(item.carName)}></i></p>
                            </div>
                        )
                     })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.car.carlist,'kl')
    return {
        carlist: state.car.carlist
        
    }
}
export default connect(mapStateToProps,null,null,{pure:false})(Cara)

