import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Caraa.css'
import {jian} from '../../../../store/actions/car'
import {jia} from '../../../../store/actions/car'
class Caraa extends Component {
    constructor() {
        super()
    }
    getjian(){
        let {dispatch,history}=this.props;
        dispatch(jian())
        history.push('/car')
    }
    getadd(){
           let {dispatch,history}=this.props;
            dispatch(jia())
            history.push('/car') 
    }
    render() {
        return (
            <div className="carPrice">
                <div onClick={this.getjian.bind(this)}>价格最低</div>
                <div onClick={this.getadd.bind(this)}>价格最高</div>
            </div>
        )
    }
}


export default connect()(Caraa)

