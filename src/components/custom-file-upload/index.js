import React, { Component } from 'react'
import { uploadToS3, getFileFromUrl } from '../../utils/miscellaneous/awsLib';
import { Button, IconButton, Icon } from '@material-ui/core';

export default class CustomFileUpload extends Component {
  constructor(props) {
    super(props);
    this.allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", 'application/pdf'];
    this.allowedFileSize = 10000000 //10mb
    this.state = {
      error: {
        isError: true,
        message: ''
      },
      fileObj: null,
      setByUser: false,
      url: { set: false, src: null }
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('derived_state', prevState)
    if (!prevState.setByUser) {
      // if (nextProps.id) {
      if (nextProps.fileObj) {
        console.log('inhere');
        let fileObj = nextProps.fileObj;
        console.log('fileObj', fileObj);
        if (prevState.fileObj) {
          if (JSON.stringify(prevState.fileObj) != JSON.stringify(fileObj))
            return ({ fileObj, setByUser: true, url: { set: true, src: nextProps.url } });
        } else {
          console.log('in_else', fileObj)
          return { fileObj: fileObj, setByUser: true, url: { set: true, src: nextProps.url } };
        }
      }else
      return null
    } else {
      console.log('in_else_state')
      return null;
    }
  }
  setError = (message, isError) => {
    console.log('error', message)
    this.setState({
      error: {
        isError,
        message
      }
    })
  }
  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (this.allowedFileTypes.includes(file.type)) {
        if (file.size <= this.allowedFileSize) {
          console.log('success_file_chose', file);
          this.setState({ fileObj: file, error: { isError: false, message: '' }, setByUser: true });
        } else {
          this.setError('File size greater then 10mb', true);
        }
      } else {
        this.setError('Unsupported file format', true);
      }
    }
  }
  uploadFile = async (fileName) => {
    const file = this.state.fileObj;
    let url = this.state.url.src;
    if (!url) {
      if (file) {
        const fileExtension = file.name.substring(file.name.lastIndexOf('.'))
        const name = `${fileName}_${new Date().getTime()}${fileExtension}`;
        const tempFile = new File([file], name, { type: `${file.type}` });
        url = await uploadToS3(tempFile, name, 'certificate');
        console.log('url', url)
        if (!url) {
          this.setError('unable to upload file', true)
        }
      }
    }
    return url;
  }
  getFile = () => {
    let isError = false;
    if (!this.state.fileObj) {
      isError = true;
      this.setError(`${this.props.name} is required`, true);
    }
    return { file: this.state.fileObj, isError };
  }
  removeFile = () => {
    this.setState({
      fileObj: null,
      error: {
        isError: false
      },
      url: { set: false, src: null }
    })
  }
  render() {
    console.log(this.state.fileObj, this.state.url);
    return (
      <>
        <div className="upload-doc">
          <div className="allow-format">
            Allowed Format : JPS,JPEG,PNG,GIF, PDF<br />
            Maximum Size : 10 MB
            </div>
          <input
            accept="image/*,.pdf" id="contained-button-file"
            type="file"
            onChange={(e) => this.onSelectFile(e)}
          />
          {
            this.state.fileObj &&
            <div className="upload-file-type d-flex align-center">
              <div className="upload-file">
                {this.state.fileObj.type.split('/')[1]}
              </div>
              <div className="upload-progress d-flex align-center">
                <div>
                  <p>{this.state.fileObj.name}</p>
                </div>
                <IconButton aria-label="delete" color="error" onClick={() => this.removeFile()}>
                  <Icon>close</Icon>
                </IconButton>
              </div>
            </div>
          }

          <label htmlFor="contained-button-file">
            <Button variant="outlined" color="primary" component="span" disabled={this.state.fileObj ? true : false}>
              Upload Certificate
              </Button>
          </label>
          {this.state.error.isError && <span>{this.state.error.message}</span>}
        </div>

      </>
    )
  }
}
