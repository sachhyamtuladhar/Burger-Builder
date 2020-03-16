import React, {Fragment} from 'react'
import styles from './Layout.module.scss'

import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = props => (
    <Fragment>
        <Toolbar /> SideDrawer, Backdrop
        <main className = {styles.content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout