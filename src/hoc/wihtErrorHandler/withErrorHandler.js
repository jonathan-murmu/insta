import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    componentWillMount() {
      axios.interceptors.request.use(req=>{
        this.setState({ error: null, modal: false });
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error, modal: true });
      });
    }
    render () {
      return (
        <Aux>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Something Bad Happened</ModalHeader>
            <ModalBody>
              {this.state.error? this.state.error.message: null}
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
          <WrappedComponent {...this.props} /> 
        </Aux>
      );
    }
  }
};

export default withErrorHandler;