import React, { Component } from 'react';
import Photo from '../../components/Photo/Photo';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import withErrorHandler from '../../hoc/wihtErrorHandler/withErrorHandler'; 
import Aux from '../../hoc/Aux/Aux';


class Photogrid extends Component {
    state = {
        photos: null,
        loading: false,
        error: false
    }
    componentDidMount () {
        axios.get('https://insta-7bcc9.firebaseio.com/photos.json')
        .then(response => {
            this.setState({ photos: response.data  })
        })
        .catch( error => {
            this.setState({ error: true })
        });
    }
    render() {
        let photoGrids = <Spinner />;
        if (this.state.photos) {
            let photos = this.state.photos.map(function(photo) {
                return <div className="col-md-4 sm-12 p-2">
                            <Photo key={photo} height="215px" width="229px" grid="grid" src={photo.Image}/>
                        </div>
             });

             photoGrids = <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
                <div className="row">
                    {photos}
                </div>
            </div>
        </div>;
        }
        return (
            <Aux>
            {photoGrids}
            </Aux>
            
        );
    }
}

export default withErrorHandler(Photogrid, axios);