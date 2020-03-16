import React from 'react'
import styles from './NavigationItems.module.scss' 
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem url='#' active>Burger Builder</NavigationItem> 
            <NavigationItem url='/'>Checkout</NavigationItem> 
        </ul>
    )
}

export default NavigationItems