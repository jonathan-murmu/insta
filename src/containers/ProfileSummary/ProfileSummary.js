import React, { Component } from 'react';
import { connect } from 'react-redux';

import withErrorHandler from '../../hoc/wihtErrorHandler/withErrorHandler'; 
import axios from '../../axios_pics';
import classes from './ProfileSummary.css';
import * as profileActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';

class ProfileSummary extends Component {

    componentDidMount () {
        this.props.getProfile();
    }
    render() {
        let profile = <Spinner />;
        if ( this.props.profile ) {
            profile = (
            <div className="row my-5">
                <div className="col-3">
                    <img src={this.props.profile.profile_pic} className={classes.profile_pic} alt="Profile Pic" />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <h2>{this.props.profile.username}</h2>
                        </div>
                        <div className="col-4">
                            <h4><b>{this.props.profile.posts}</b> Posts</h4>
                        </div>
                        <div className="col-4">
                            <h4><b>{this.props.profile.followers}</b> Followers</h4>
                        </div>
                        <div className="col-4">
                            <h4><b>{this.props.profile.following}</b> Following</h4>
                        </div>
                    </div>
                </div>
            </div>);
        }
        return (
            <Aux>
                {profile}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profileSummary.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(profileActions.getProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ProfileSummary, axios));