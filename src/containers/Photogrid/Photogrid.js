import React, { Component } from 'react';
import classes from './Photogrid.css';
import Aux from '../../hoc/Aux/Aux';
import Photo from '../../components/Photo/Photo';
import { Button } from 'reactstrap';


class Photogrid extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="row">
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-md-4 sm-12 p-2">
                            <Photo height="215px" width="229px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photogrid;