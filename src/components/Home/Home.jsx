import React,{Component} from 'react'
import './Home.css'
class Home extends Component{
    constructor(){
        super()
        this.state={
            text:'北京市'
        }
    }
    jump(){
        let {history}=this.props;
        history.push('/buy')
    }
    componentDidMount(){
        let text1=localStorage.getItem('er')
        this.setState({
            text:text1
        })
    }
    render(){
        let {text}=this.state;
        return (
            <div className='header'>
                 <p onClick={()=>this.jump()}>{text}</p>
                <i className='icon iconfont icon-fangdajing'></i> 
            </div>
        )
    }
}
export default Home