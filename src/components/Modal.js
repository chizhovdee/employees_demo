import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../../stylesheets/Modal.scss'

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount(){
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount(){
    modalRoot.removeChild(this.el);
  }

  render(){
    return ReactDOM.createPortal(
      <div className="modal-overflow">
        <div className="modal">
          <span className="close" onClick={this.props.handleClose}>X</span>

          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>,
      this.el
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default Modal
