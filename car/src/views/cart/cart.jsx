import React,{ Component } from 'react';
import './cart.css';
import { NavLink } from 'react-router-dom';
import RouteWrapper from '../../components/RouteWrapper';
class cart extends Component{
     render() {
         let { routes } = this.props;
        return (
            <div>
                <header className='header'><span>北京市</span><label htmlFor=""><input type="text"/></label></header>
                <section className='section'>
                    <div className="top">
                         <ul className="footer">
                                <li>
                                    <NavLink to="/index/cart/sort" activeClassName="tab-active">
                                        <span className="iconfont icon-shouye"></span>
                                        <span>排序</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/index/cart/brand" activeClassName="tab-active">
                                        <span className="iconfont icon-fenlei"></span>
                                        <span>品牌</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/index/cart/price" activeClassName="tab-active">
                                        <span className="iconfont icon-gouwuche"></span>
                                        <span>价格</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/index/cart/dress" activeClassName="tab-active">
                                        <span className="iconfont icon-wode"></span>
                                        <span>筛选</span>
                                    </NavLink>
                                </li>
                        </ul>
                    </div>
                    <div className="contents">
                         <RouteWrapper routes={ routes }></RouteWrapper>
                    </div>
                </section>
            </div>
        )
    }
}
export default cart