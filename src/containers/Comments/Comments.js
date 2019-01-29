import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Aux from '../../hoc/Aux/Aux';

class Comments extends Component {
    state = {
        comment: ''
    }
    commentHandler = ( event ) => {
        event.preventDefault();
        console.log('comented');
        console.log(this.state);
        console.log(this.props.photoId);
        //TODO: make post request
    }
    inputChangedHandler = ( event ) => {
        let comment = event.target.value;
        console.log(comment);
        this.setState({comment: comment});
    }
    render () {
        return (
            <Aux>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <p>comment 1</p>
                    </div>
                    <div className="col-md-12">
                        <p>comment 1</p>
                    </div>
                    <div className="col-md-12">
                        <p>comment 1</p>
                    </div>
                    <div className="col-md-12">
                        <p>comment 1</p>
                    </div>

                </div>
                <div className="row" style={{position:"absolute", bottom:0}}>
                    <div className="col-md-12">
                    <Form onSubmit={this.commentHandler}>
                    <Input type="text" name="comment" id="comment" placeholder="Add a comment..." 
                        onChange={ (event ) => this.inputChangedHandler(event) }/>
                    </Form>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Comments;