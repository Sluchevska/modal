import { Component } from 'react'
import { createPortal } from 'react-dom'
import './modal.css'
const modalRoot=document.querySelector('#modal-root')

export default class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
       window.removeEventListener('keydown', this.handleKeyDown) 
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    };

    handleBackDrop = e => {
        if (e.currentTarget === e.target) {
           this.props.onClose()
       } 
    }

    render() {
        return createPortal(

            <div className="Modal__backdrop" onClick={this.handleBackDrop}>
                <div className="Modal__content">{ this.props.children}</div>
            </div>, modalRoot,
        )
    }
}