import React,{ Component } from 'react';
import './upcity.css'
import axios from 'axios'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
class Upcity extends Component{
     constructor(){
        super();
        this.state={
            citylist:[],
            scroll:null,
            id:null
        }
    }
    componentDidMount(){
        const {dispatch} = this.props
        axios.get('/api/getupdata').then((res)=>{
            dispatch({
                type:"GET_UP_DATA",
                data:res.data
            })
        })
         const options = {
             scrollY: true ,
             click:true
         }
        
         const left = this.refs.left;
         this.setState({
             scroll:new BScroll(left,options)
         })
    }

    indexClick(item,e){
       let citylist = this.props.data.city;
        for (var keys in citylist) {
            if(keys==item.id){
                this.setState({citylist:citylist[keys]})
            }
        }   
    }
    scrollClick (index) {
        this.setState({
            ind: index
        })
        let arrs = []
        let arrTop = this.refs.left.querySelectorAll('.prv');
        for (let i = 0; i < arrTop.length; i++) {
            arrs.push(arrTop[i].offsetTop);
        }
        this.state.scroll.scrollTo(0, -arrs[index], 1000);
    }
    sectionClick (e) {
        console.log(e.target.innerHTML);
        sessionStorage.setItem("ihtml", e.target.innerHTML);
    }
    goCity(){
        console.log(this.props.history)
        this.props.history.go(-1)
    }
    render() {
          const {data} = this.props
          const {citylist} = this.state
        // console.log(data,citylist)
        return (
            <div>
                <header><span onClick={this.goCity.bind(this)}>返回</span></header>
                <div className='section' >
                    <div className="left" ref='left'>
                          <div>
                                {
                                data!==undefined&&data.provinceArr.map((items,index)=>{
                                return <div key={index} className='prv'>
                                            <h3 >{items.letter}</h3>
                                        <ul>
                                            {
                                                items.province.map((item,ind)=>{
                                                    return <li key={ind} onClick={this.indexClick.bind(this,item)}>{item.name}</li>
                                                })
                                            }
                                        </ul>
                                </div>
                                })
                            }    
                          </div>
                    </div>
                    <div className='middle'>
                          {
                              citylist.map((item,index)=>{
                                  return <p key={index} onClick={this.sectionClick.bind(this)}>{item.name}</p>
                              })
                          }
                     </div>
                    <div className="right">
                        {
                            data!==undefined&&data.provinceArr.map((items,index)=>{
                                return <h3 key={index} onClick={this.scrollClick.bind(this,index)}>{items.letter}</h3>
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
export default connect(mapStateToProps)(Upcity)