import React,{ Component } from 'react';
import './sort.css'
import axios from 'axios'
import { connect } from 'react-redux'
class Sort extends Component{
     constructor(){
        super()
        this.state={
            carList:[]
        }
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

    cityAdd(){
            
    }
     render() {
         const {data} = this.props
         const {carList} = this.state
        return (
            <div className='allCar'>
                <div className="container">
                   
                </div>
                <div className="title">
                    <div>
                        {
                            data!==undefined&&data.map((item,index)=>{
                                if(item[index]!==undefined&&index<10&&item[index].carList[0].price!==''){
                                        return (
                                        <div key={index}><h4>{item[index].carList[0].carName}</h4>
                                        <p>{item[index].carList[0].price}<span>X</span></p></div>)
                                }
                            })
                           
                        }
                    </div>
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
export default connect(mapStateToProps)(Sort)