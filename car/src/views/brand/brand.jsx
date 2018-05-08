import React,{ Component } from 'react';
import './brand.css'
import axios from 'axios'
import { connect } from 'react-redux'
class Brand extends Component{
      constructor(){
        super()
    }
    componentDidMount(){
        const {dispatch} = this.props
        axios.get('/api/getCardata').then((res)=>{
           // console.log(res)
            dispatch({
                type:"GET_CAR_DATA",
                data:res.data
            })
        })
        
    }
    fundCar(e){
        const {data} = this.props
        const container = document.querySelector('.container')
        data.map((item,index)=>{
            item[index]!==undefined&&item.map((items,ind)=>{
                console.log(items[ind])
            })
        })

    }
     render() {
         const {data} = this.props
        return (
            <div className='allCar'>
                <div className="container">
                    {
                        data!==undefined&&data.map((item,index)=>{
                           return item.map((items,ind)=>{
                                return <p key={ind} onClick={this.fundCar.bind(this)}>{items.carClass}</p>
                            })
                        })
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state,ownProps){
        console.log(state.get_data.data)
    return {
        data:state.get_data.data
    }
}
export default connect(mapStateToProps)(Brand)