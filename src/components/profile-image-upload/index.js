import React, { Component } from 'react'
import { showMessage } from '../../utils/miscellaneous/messageLib';
import ImgChoseCrop2 from '../img-crop-2';
import { Icon, IconButton } from '@material-ui/core';
import { uploadToS3 } from '../../utils/miscellaneous/awsLib';

export default class ProfileImageUpload extends Component {
  constructor(props) {
    super(props);
    window.uploadImage = this;
    this.currTime = new Date().getTime();
  }
  onSelectFile = e => {
    // this.imgCropComponent.onSelectFile(e);
    // e.preventDefault();
    console.log(this.props.type)
    if (window.TestAndroid) {
      console.log('msg')
      window.TestAndroid.onStoreImageClick(this.props.type)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.onStoreImageClick) {
      window.webkit.messageHandlers.onStoreImageClick.postMessage(this.props.type);
    }

  }
  applyCroppedImg = (imgUrl, blobObj) => {
    console.log('blobObj', blobObj);
    // let name = this.props.name ? this.props.name : 'unanemd';
    const imageName = `${this.props.name.split(' ').join('_')}_${this.currTime}`;
    this.uploadImage(imageName, blobObj, imgUrl)

  }
  uploadImage = async (imageName, blobObj, imgUrl) => {
    let url = imgUrl;
    if (blobObj) {
      const tempImgUrl = new File([blobObj], `${imageName}.jpeg`, { type: 'image/jpeg' });
      // this.props.updateFullScreenLoaderState(true);
      url = await uploadToS3(tempImgUrl, imageName);
      if (!url) {
        // this.props.updateFullScreenLoaderState(false);
        showMessage('Unable to upload image', 'error');
      }
    }
    this.props.updateProfileImage(url, this.props.type);
  }

  uploadImageFromMobile(url, type) {
    if (url.charAt(0) != 'h') {
      // this.props.updateFullScreenLoaderState(false);
      showMessage('Unable to upload image', 'error');
    } else {
      this.props.updateProfileImage(url, type);
    }
  }
  render() {
    return (
      <>
        {
          this.props.type == 'cover' ?
            <div className="upload-cover">
              <input accept="image/*" id="upload-cover-img" type="button" onClick={this.onSelectFile} />
              <label htmlFor="upload-cover-img">
                <IconButton size="small" aria-label="upload picture" component="span">
                  <Icon>photo_camera</Icon>
                </IconButton>
              </label>
              <ImgChoseCrop2 ref={ref => this.imgCropComponent = ref} applyImage={this.applyCroppedImg} aspectRatio={3 / 2} />
            </div>
            :
            <div className="upload-profile">
              <input accept="image/*" id="upload-profile-img" type="button" onClick={this.onSelectFile} />
              <label htmlFor="upload-profile-img">
                <IconButton size="small" aria-label="upload picture" component="span">
                  <Icon>photo_camera</Icon>
                </IconButton>
              </label>
              <ImgChoseCrop2 ref={ref => this.imgCropComponent = ref} applyImage={this.applyCroppedImg} />
            </div>
        }
      </>

    )
  }
}
