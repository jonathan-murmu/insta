import React, { Component } from 'react';
import classes from './Photogrid.css';
import Aux from '../../hoc/Aux/Aux';
import Photo from '../../components/Photo/Photo';
import { Button } from 'reactstrap';


class Photogrid extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-4 m-1">
                            <Photo height="293px" width="293px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-sm-4 m-1">
                            <Photo height="293px" width="293px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-sm-4">
                            <Photo height="293px" width="293px" grid="grid" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-sm-4">
                            <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-sm-4">
                            <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-sm-4">
                            <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                        <div className="col-sm-4">
                            <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1">
                </div>
            </div>
        );
    }
}

export default Photogrid;