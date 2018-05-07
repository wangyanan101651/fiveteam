import React, { Component } from 'react'
import { NavLink, Route,withRouter } from 'react-router-dom'
import { data } from './router/data.js'

import './App.css'
import Footer from './components/Common/Footer/Footer.jsx'
class App extends Component {
    
    render() {
        let {location}=this.props;
        return (
            <div className='app'>
                
                    <div className="cen">
                        <div className="section">
                            {
                                data.route_view.map((item,index)=>{
                                    return (
                                        <Route exact path={item.path} component={item.component} key={index}></Route>
                                    )
                                })
                            }
                        </div>
                        {
                           /\/buy/.test(location.pathname)||/\/bout/.test(location.pathname)?'':   <div className="footer">
                            {
                                data.nav.map((item, index) => {
                                    return (
                                        <NavLink to={item.to} key={index}>
                                            <Footer title={item.text}></Footer>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                        }
                    </div>
            </div>
        )
    }
}

export default withRouter(App)