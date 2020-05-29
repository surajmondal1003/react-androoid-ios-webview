import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import Cropper from 'react-easy-crop'
import 'react-image-crop/dist/ReactCrop.css';
import { Dialog, DialogActions, Button, DialogTitle, DialogContent, Slider } from '@material-ui/core';

const imageAllowedSize = 10000000 //5mb
const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
class ImgChoseCrop2 extends PureComponent {
  state = {
    src: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: this.props.aspectRatio ? this.props.aspectRatio : 1 / 1,
    cropModal: false
  };
  
  toggleModal = () => {
    this.setState((prevState) => ({ cropModal: !prevState.cropModal }));
  }
  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log('files', e.target.files);
      if (allowedFileTypes.includes(file.type)) { //checks file type
        if (file.size <= imageAllowedSize) { //checks file size
          const reader = new FileReader();
          reader.addEventListener('load', () =>
            this.setState({ src: reader.result, imgFile: file, cropModal: true, crop: { x: 0, y: 0 }, zoom: 1 })
          );
          reader.readAsDataURL(file);
        } else {
          console.log('File size is beyond specified limit');
        }
      } else {
        console.log('unsupported file format');
      }
    }
  };
  onZoomChange = zoom => {
    this.setState({ zoom })
  }

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    this.cropCompleteObj = croppedAreaPixels;
    // this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };
  openCropImageWithSrc = (src) => {
    this.setState({ cropModal: true, src });
  }
  createImage = url =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', error => reject(error))
      image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
      image.src = url
    })

  async makeClientCrop() {
    const image = await this.createImage(this.state.src)
    const crop = this.cropCompleteObj;
    if (image && crop.width && crop.height) {
      const { croppedImageUrl, blobObj } = await this.getCroppedImg(
        image,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl, cropModal: false });
      this.props.applyImage(croppedImageUrl, blobObj);
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve({ croppedImageUrl: this.fileUrl, blobObj: blob });
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src, zoom, aspect } = this.state;
    console.log('croppedImageUrl', croppedImageUrl)
    return (
      <div>
        {/* <div>
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
        </div> */}
        <Dialog open={this.state.cropModal} fullScreen>
          <DialogTitle>Crop Image</DialogTitle>
          <DialogContent>
            <div className="crop-container">
              <Cropper
                image={src}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={this.onCropChange}
                onCropComplete={this.onCropComplete}
                onZoomChange={this.onZoomChange}
              />
              {/* <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              /> */}
            </div>
            {/* <div className="controls">
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(zoom)}
                classes={{ container: 'slider' }}
              />
            </div> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.toggleModal()}>
              Cancel
              </Button>
            <Button onClick={() => this.makeClientCrop()} color="primary" autoFocus>
              Crop
              </Button>
          </DialogActions>
        </Dialog>
        {/* {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )} */}

      </div>
    );
  }
}

export default ImgChoseCrop2
