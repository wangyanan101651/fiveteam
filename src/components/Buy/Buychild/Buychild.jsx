import React,{Component} from 'react'
import './Buychild.css'
import {connect} from 'react-redux'
import {addDate} from '../../../store/actions/buychild.js'

class Buychild extends Component{
    constructor(){
        super()
        this.state={ 
        }
    }
    add(cityItem,e){
        console.log(e.target)
        if(e.target.className!='actives'){
            e.target.className='actives'
            this.props.getadd({city:cityItem,dom:e.target})
        }else{
            e.target.className=''
        }
    }
    render(){
        let {letter,city}=this.props;
        return (
            <div>
                <h3>{letter}</h3>
                 {
                   city.map((item,index)=>{
                       return (
                           <span key={index} onClick={this.add.bind(this,item.name)} >
                               {item.name}
                           </span>
                       )
                   })
                } 
            </div>
        )
    }
}

export default connect()(Buychild)