import React,{Fragment} from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'
import styles from './SideDrawer.module.scss'

const SideDrawer = props => {
    return (
        <Fragment>
            <BackDrop show={props.show} clicked={props.toggleHandler}/>
            <div className={[styles.SideDrawer, props.show ? styles.Open : styles.Closed].join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </Fragment>
    )
}

export default SideDrawer