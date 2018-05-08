import React,{ Component } from 'react';
import './home.css'
class Home extends Component{
     render() {
       
        return (
            <div>
                <span onClick={this.toCity.bind(this)}>北京市</span>
            </div>
        )
    }
    toCity(){
        this.props.history.push('/city')
    }
    
}
export default Home