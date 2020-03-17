import React, {Fragment, Component} from 'react'
import styles from './Modal.module.scss'
import BackDrop from '../BackDrop/BackDrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    render(){
        return (
            <Fragment>
                <BackDrop show={this.props.show} clicked={this.props.close}/>
                <div 
                    className = {styles.Modal}
                    style = {{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal