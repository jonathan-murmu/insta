import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios_pics';
import withErrorHandler from '../../hoc/wihtErrorHandler/withErrorHandler'; 
import Aux from '../../hoc/Aux/Aux';
import * as photoGridActions from '../../store/actions/index';  // index can be omitted 


class Photogrid extends Component {
    state = {
        photos: null,
        loading: false,
        error: false
    }
    componentDidMount () {
        this.props.getPhotos();
        // axios.get('https://insta-7bcc9.firebaseio.com/photos.json')
        // .then(response => {
        //     this.setState({ photos: response.data  })
        // })
        // .catch( error => {
        //     this.setState({ error: true })
        // });
    }
    render() {
        let photoGrids = <Spinner />;
        if (this.props.phts) {
            let photos = this.props.phts.map(function(photo, index) {
                return ( 
                    <div className="col-md-4 col-sm-12 p-2">
                        <Link to={`/photos/${index}`}><Photo key={index} height="215px" grid="grid" src={photo.Image}/></Link>
                    </div>
                );
            });

            photoGrids = (
                <div className="row">
                    {photos}
                </div>
            );
        }
        return (
            <Aux>
                {photoGrids}
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        phts: state.photogrid.photos,
        error: state.photogrid.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: () => dispatch(photoGridActions.getPhotos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Photogrid, axios));