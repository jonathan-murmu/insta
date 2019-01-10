import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../../components/Photo/Photo';
import axios from '../../axios_pics';
import Aux from '../../hoc/Aux/Aux';
import wihtErrorHandler from '../../hoc/wihtErrorHandler/withErrorHandler';
import * as singlePhotoActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class SinglePhoto extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSinglePhoto(id)
    }
    render () {
        let photo = <Spinner/>
        if ( this.props.singlePhoto ) {
            photo = (
                <div className="col-md-4 offset-md-3">
                    <Photo src={this.props.singlePhoto.Image}/>
                </div>
            )
        }
        
        return (
            <Aux>
                <div className="row mt-5 no-gutters">
                    {photo}
                    <div className="col-md-2">
                        <h2>Comments</h2>
                    </div>
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        singlePhoto: state.singlePhoto.photo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSinglePhoto: (id) => dispatch(singlePhotoActions.getSinglePhoto(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(wihtErrorHandler(SinglePhoto, axios));