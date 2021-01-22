
import React, {Component } from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import './layout.css'

class Layout extends Component {

    state = {
        showNav:false
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav:action
        })
    }

    render(){

        return(
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav = {() => this.toggleSideNav(false)}
                    onShowNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }

}

export default Layout;
