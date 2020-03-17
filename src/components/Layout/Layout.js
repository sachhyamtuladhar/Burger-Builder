import React, {Fragment, Component} from 'react'
import styles from './Layout.module.scss'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSidedrawer: false
    }

    toggleSide = () => {
        this.setState((state)=>({
            showSidedrawer: !state.showSidedrawer
        }))
    }

    render(){
        return <Fragment>
            <SideDrawer show={this.state.showSidedrawer} toggleHandler={this.toggleSide}/>
            <Toolbar toggleSide={this.toggleSide}/> SideDrawer, Backdrop
            <main className = {styles.content}>
                {this.props.children}
            </main>
        </Fragment>
    }

}

export default Layout