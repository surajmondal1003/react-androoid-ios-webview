import React, { Component } from 'react'
import { IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core';
import CustomFileUpload from '../custom-file-upload';
import verifiedImg from '../../assets/img/verified.svg'
import PanTypeInput from '../pan-type-input';
import DatePickerCustom from '../date-picker';

export default class TradeLiscenseForm extends Component {
  constructor(props) {
    super(props);
    this.currTime = new Date().getTime();
    this.certificateType = 'individual';
    this.entityType = '';
    this.state = {
      form: {
        certifyingAuth: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
          validation: '^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$'
        },
        certificateNum: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
          validation: '^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$',
          confirmCheck: { fieldName: 'panNum', message: 'Pan Number doesnt match' }
        },
        businessName: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        certificateType: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        certificateValidity: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        entityType: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
      }
    }
  }
  onDrpDwnChange = (e) => {
    this[e.target.name] = e.target.value;
  }
  submitForm = () => {
    let { certificate, isError } = this.fileUploadComp.getFile();
    const certifyingAuth = this.certifyingAuth.value;
    const certificateNum = this.certificateNum.value;
    const businessName = this.businessName.value;
    const certificateType = this.certificateType;
    const certificateValidity = this.certificateValidity;
    const entityType = this.entityType;
    const tempState = this.state.form;
    const checkObj = {
      certifyingAuth,
      certificateNum,
      businessName,
      certificateType,
      certificateValidity
    }
    if (certificateType == 'entity') {
      checkObj['entityType'] = entityType;
    }
    Object.keys(checkObj).forEach(x => {
      const objVal = checkObj[x] ? checkObj[x].toString() : '';
      const xformObj = tempState[x];
      let objHasError = false
      xformObj.checkParams.forEach(param => {
        if (!objHasError) {
          xformObj.error.message = '';
          xformObj.error.isError = false
          switch (param) {
            case 'required':
              if (!objVal.length) {
                isError = true;
                objHasError = true;
                xformObj.error.message = 'Required Field';
                xformObj.error.isError = true
              }
              break;
            case 'regexValidation':
              const regex = new RegExp(xformObj.validation)
              if (!regex.test(objVal)) {
                isError = true;
                objHasError = true;
                xformObj.error.message = 'Invalid input';
                xformObj.error.isError = true
              }
              break;
            case 'confirmCheck':
              if (objVal != checkObj[xformObj.confirmCheck.fieldName]) {
                isError = true;
                objHasError = true;
                xformObj.error.message = xformObj.confirmCheck.message;
                xformObj.error.isError = true
              }
              break;
          }
        }
      })
    });
    if (!isError) {
      this.props.updateFullScreenLoaderState(true);
      let imgName = `${businessName.split(' ')[0]}_${this.currTime}`;
      let certificateUrl = this.fileUploadComp.uploadFile(imgName);
      if (certificateUrl) {
        const payload = {
          certifyingAuthority: certifyingAuth,
          certificateNumber: certificateNum,
          certificateType,
          businessName,
          entityType,
          certificateValidity,
          certificateUrl
        }
        console.log(payload)
        // this.props.submitGstForm();
      } else {
        this.props.updateFullScreenLoaderState(false);
      }
    }
    this.setState({ form: tempState });
  }
  render() {
    let key = 'pan';

    return (
      <><div className="profile-form">
        <TextField
          style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_1`}
          label="Certifying Authority"
          inputRef={ref => this.certifyingAuth = ref}
          error={this.state.form.certifyingAuth.error.isError}
          helperText={this.state.form.certifyingAuth.error.message}
        />
        <TextField
          style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_2`}
          label="Certificate Number"
          inputRef={ref => this.certificateNum = ref}
          error={this.state.form.certificateNum.error.isError}
          helperText={this.state.form.certificateNum.error.message}
        // InputProps={{
        //   endAdornment:
        //     <InputAdornment position="end">
        //       <InputAdornment position="end">
        //         <img src={verifiedImg} alt="verified" />
        //       </InputAdornment>
        //     </InputAdornment>
        // }}
        />
        <TextField style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_3`}
          label="Business/Legal name as per certificate"
          inputRef={ref => this.businessName = ref}
          error={this.state.form.businessName.error.isError}
          helperText={this.state.form.businessName.error.message}
        />
        <PanTypeInput key={`${key}_4_${Math.random()}`} form={this.state.form} entityType={this.entityType} panType={this.certificateType} type={'certificate'} onDrpDwnChange={this.onDrpDwnChange} />
        <DatePickerCustom key={`${key}_5`} date={new Date()} onDateChange={(val) => this.certificateValidity = { value: val }} />

        <CustomFileUpload ref={ref => this.fileUploadComp = ref} name={'Certificate'} />
        <div className="text-center mt-20px">
          <Button variant="contained" color="primary" disableElevation onClick={() => this.submitForm()}>Submit</Button>
        </div>
      </div>
      </>
    )
  }
}
