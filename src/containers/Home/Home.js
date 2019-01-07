import React, { Component } from 'react';
import Photogrid from '../Photogrid/Photogrid';
import ProfileSummary from '../ProfileSummary/ProfileSummary';

class Home extends Component {
    render () {
        return (
            <div className="row mt-5 no-gutters">
                <div className="col-md-6 offset-md-3">
                    <ProfileSummary />
                    <Photogrid />
                </div>
            </div>
        );
        
    }
};

export default Home;