import React,{ Component } from 'react';
import './city.css'
import axios from 'axios'
import { connect } from 'react-redux'
class City extends Component{
    constructor(){
        super()
        this.state={
            arrData:[]
        }
    }
    componentDidMount(){
        const {dispatch} = this.props
        axios.get('/api/getdata').then((res)=>{
           // console.log(res)
            dispatch({
                type:"GET_DATA",
                data:res.data
            })
        })
        
    }
     render() {
         //console.log(this.props)
         const {data} = this.props
         const {arrData} = this.state
        return (
            <div>
                <header>
                    <h2>选择城市</h2>
                </header>
                <section>
                    <div className="top">
                        <p><span onClick={this.toUpcity.bind(this)}>你的上牌地址<b></b></span></p>
                    </div>
                    <div className='choose'>
                        您已选择的城市:
                        {
                            arrData!=undefined&&arrData.map((item,index)=>{
                                    return <span key={index} onClick={this.delCity.bind(this,item)}>
                                        {item.city}
                                            </span>
                            })
                            
                        }
                    </div>
                    <div className="main">
                        {
                           data!=undefined&&data.map((item,index)=>{
                                return <div key={index}>
                                        <h3>{item.letter}</h3>
                                            {
                                                item.city.map((items,ind)=>{
                                                   return <span key={ind} onClick={this.addCity.bind(this,items.name)}>{items.name}</span>
                                                })
                                            }
                                    </div>
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
    addCity(items,e){
      const {arrData} = this.state
         const loc =  e.target
         //console.log(e.target)
            if(loc.className!="bg"){//如果没有类名就添加类名并且添加到已经选择的城市中
                loc.className='bg'
                arrData.map((val,index)=>{
                    if(val.city==items){
                    arrData.splice(index,1)
                    }
                })
                
               arrData.push({city:items,dom:loc})
               console.log(arrData)
            }
            else{
                loc.className='';
                arrData.forEach((item,index)=>{
                   if(item.city==items){
                       arrData.splice(index,1)
                   }
            })
       }
        this.setState({arrData})
    }
    delCity(items,e){
         const {arrData} = this.state;
            arrData.forEach((val,ind) => {
            if(val.city == items){
                arrData.splice(ind,1);
                if(val.dom) {
                val.dom.className = ''
                }
            }
            })
        this.setState({arrData})
    }
    toUpcity(){
        this.props.history.push('/Upcity')
    }
}
function mapStateToProps(state,ownProps){
        console.log(state.get_data)
    return {
        data:state.get_data.data
    }
}
export default connect(mapStateToProps)(City)