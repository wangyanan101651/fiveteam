import React,{Component} from 'react'

class Child extends Component{
    render(){
        let {name}=this.props;
        return (
            <div>
                <p>
                    {
                        name.map((item,index)=>{
                            return (
                                <span key={index}>{item.name}</span>
                            )
                        })
                    }
                </p>
            </div>
        )
    }
}
export default Child