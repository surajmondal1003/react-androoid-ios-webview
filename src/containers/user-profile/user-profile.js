import React, { Component } from 'react'
import { Icon, IconButton, Button } from '@material-ui/core';
import ProfileImageUpload from '../../components/profile-image-upload';
import EditProfile from '../../components/edit-profile';
import { replaceUrl } from '../../utils/miscellaneous/imgLib';
import { history } from '../../utils/config/app_config';

export default class UserProfile extends Component {
  updateProfileImage = (url) => {
    console.log('url is here', url);
    this.props.updateProfileImage({ profileImage: url });
    console.log('afert')
  }
  openLink = (linkName) => {
    history.push(`/${linkName}`);
  }
  getImgUrl = (url) => {
    if (url.includes('ndhbucket'))
    return replaceUrl(url, 'store_profile');
    else
    return url;
    }

  render() {
    const userDetails = this.props.userDetails ? this.props.userDetails.toJS() : {}
    console.log(Object.keys(userDetails).length)
    return (
      <>
      {
        Object.keys(userDetails).length?
      
        <div className="user-profile-cont">
          <div className="user-profile">    
          </div>
          <div className="profile-details">
            <div className="profile-picture">
              {
                userDetails.profile_image &&
                <img src={this.getImgUrl(userDetails.profile_image)} alt="profile" />
              }
              {userDetails.id && <ProfileImageUpload name={userDetails.name} updateProfileImage={this.updateProfileImage} updateFullScreenLoaderState={this.props.updateFullScreenLoaderState} />}
            </div>
          
          {
            userDetails.id &&
            <EditProfile />
          }
          </div>
        </div>:null
      }
      </>
    )
  }
}
