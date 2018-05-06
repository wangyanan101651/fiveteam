import React,{Component} from 'react'

class Footer extends Component{
    render(){
        let {title}=this.props;
        return (
            <p className='text'>{title}</p>
        )
    }
}
export default Footer