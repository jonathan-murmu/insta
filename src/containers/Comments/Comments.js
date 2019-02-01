import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input } from 'reactstrap';
import Aux from '../../hoc/Aux/Aux';
import * as commentActions from '../../store/actions/index';
import axios from '../../axios_pics';
import wihtErrorHandler from '../../hoc/wihtErrorHandler/withErrorHandler';

class Comments extends Component {
    state = {
        comment: ''
    }
    componentDidMount() {
        const id = this.props.photoId;
        this.props.getComments(id);
    }
    commentSubmitHandler = ( event ) => {
        event.preventDefault();
        let user = this.props.profile.username;
        const comment = {
            photoId: this.props.photoId,
            comment: this.state.comment,
            username: user
        }
        this.props.postComment(comment);
        this.setState({comment: ''});
    }
    inputChangedHandler = ( event ) => {
        let comment = event.target.value;
        this.setState({comment: comment});
    }
    render () {
        let commentSection = <div className="row mt-2">No Comments</div>;
        if ( this.props.comments) {
            let comments = []
            for (let index in this.props.comments) {
                comments.push(
                    {
                        comment: this.props.comments[index].comment,
                        username: this.props.comments[index].username,
                        index: index
                    }
                );
            }
            let com = comments.map(function (comment,index ) {

                return (
                    <div className="col-md-12">
                        <p key={comment.index}><b>{comment.username}</b> {comment.comment}</p>
                    </div>
                )
            });
            commentSection = <div className="row mt-2 p-3">{com}</div>

        }
        return (
            <Aux>
                {commentSection}
                <div className="row pl-3" style={{position:"absolute", bottom:0}}>
                    <div className="col-md-12">
                    <Form onSubmit={this.commentSubmitHandler}>
                    <Input type="text" name="comment" id="comment" value={this.state.comment} placeholder="Add a comment..." 
                        onChange={ (event ) => this.inputChangedHandler(event) }/>
                    </Form>
                    </div>
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        profile: state.profileSummary.profile,
        comments: state.comments.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postComment: (comment) => dispatch(commentActions.postComment(comment)),
        getComments: (id) => dispatch(commentActions.getComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(wihtErrorHandler(Comments, axios));