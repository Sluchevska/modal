import { Component } from 'react'
import './modal.css'
export default class Modal extends Component{
    componentDidMount() {
    
    }
    componentWillUnmount() {
        
    }
    render() {
        return (
            <div className="Modal__backdrop">
                <div className="Modal__content">{ this.props.children}</div>
            </div>
        )
    }
}