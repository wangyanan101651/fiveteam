import React, {Component} from 'react'
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Footer from './components/common/Footer'
import Main from './components/common/Main'
import FooterItem from './components/common/Footer/FooterItem'
import {ROUTER_MAP}from './router/routerMap'

class App extends Component {
    render () {
        return (
            <div className='app'>
                <Main className='main'>
                    {
                        ROUTER_MAP.ROUTER_VIEW.map((item,idx) => {
                            return (
                                <Route exact
                                    path={item.path}
                                    component = {item.component}
                                    key = {idx}
                                ></Route>
                            )
                        })
                    }
                </Main>
                <Footer className='foot'>
                    {
                        ROUTER_MAP.NAV.map((item,idx) =>{
                            return (
                                <NavLink
                                    to={item.to}
                                    
                                    key = {idx}
                                >
                                    <FooterItem title={item.title}></FooterItem>
                                </NavLink>
                            )
                        })
                    }
                </Footer>
            </div>
        )
    }
}

export default App