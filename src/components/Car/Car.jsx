import React,{Component} from 'react'
 import axios from 'axios'
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCarlist} from '../../store/actions/car'
import {getZong} from '../../store/actions/car'
import Car_a from './Car_child/Cara'
import Car_aa from './Car_child/Caraa'
import Car_b from './Car_child/Carb'
import Car_c from './Car_child/Carc'
import Car_d from './Car_child/Card'
import Car_e from './Car_child/Care'
import './Car.css'

class Car extends Component{
    constructor(){
        super()
            this.state={
                obj:{
                    link:[
                        {
                            to:'/car/a',
                            text:'排序'
                        },
                        {
                            to:'/car/b',
                            text:'品牌'
                        },{
                            to:'/car/c',
                            text:'价格'
                        },{
                            to:'/car/d',
                            text:'筛选'
                        }
                    ],
                    route:[
                        {
                            path:'/car/a',
                            component:Car_a
                        },{
                             path:'/car/b',
                            component:Car_b
                        },{
                             path:'/car/c',
                            component:Car_c
                        },{
                             path:'/car/d',
                            component:Car_d
                        }
                    ]
            },
            arr:[]
        }
    }
    componentDidMount(){
        let {dispatch,carlist}=this.props;
        axios.get('/api/carClass').then(data=>{
            dispatch(getCarlist(data.data))
        })
    }
    bian(e){
        let {history}=this.props;
       // console.log(e.target.lastChild)
        if(e.target.className=='icon iconfont icon-angle-down'){
            e.target.className='icon iconfont icon-angle-up'
        }else{
            e.target.className='icon iconfont icon-angle-down'
        }
    }
    render(){
       let {obj}=this.state;
       let {match}=this.props;
        return (
            <Router>
                <div className='route_box'>
                     <div className='route_bigbox'>
                         <div className='route_head'>
                           {
                               obj.link.map((item,index)=>{
                                   return (
                                       <NavLink key={index} to={item.to}><span>{item.text}<i className='icon iconfont icon-angle-down' onClick={this.bian.bind(this)}></i></span>  </NavLink>
                                   )
                               })
                           }  
                        </div>  
                        <div className='route_sec'>
                            <Switch>
                                <Route path={`${match.url}/content`} component={Car_a}></Route>
                                <Route path={`${match.url}/a`} component={Car_aa}></Route>s
                                <Route path={`${match.url}/b`} component={Car_b}></Route>
                                <Route path={`${match.url}/c`} component={Car_c}></Route>
                                <Route path={`${match.url}/d`} component={Car_d}></Route>
                                <Redirect from={match.url} to={`${match.url}/content`}></Redirect> 
                            </Switch>
                        </div>
                    </div> 
                </div>
            </Router>
        )
    }
}


export default connect()(Car)