import React, { Component } from 'react'
import { IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core';
import CustomFileUpload from '../custom-file-upload';
import verifiedImg from '../../assets/img/verified.svg'
import PanTypeInput from '../pan-type-input';
import DatePickerCustom from '../date-picker';

export default class PanForm extends Component {
  constructor(props) {
    super(props);
    this.currTime = new Date().getTime();
    this.panType = '';
    this.entityType = '';
    this.state = {
      form: {
        panNum: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation'],
          validation: '^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$'
        },
        confirmPanNum: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation', 'confirmCheck'],
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
        panType: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        dobOfCorporation: {
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
    const panNum = this.panNum.value;
    const confirmPanNum = this.confirmPanNum.value;
    const businessName = this.businessName.value;
    const panType = this.panType;
    const dobOfCorporation = this.dobOfCorporation;
    const entityType = this.entityType;
    const tempState = this.state.form;
    const checkObj = {
      panNum,
      confirmPanNum,
      businessName,
      panType,
      dobOfCorporation
    }
    if (panType == 'entity') {
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
          panNumber: panNum,
          panType,
          businessName,
          entityType,
          dobOfCorporation,
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
    let objVal = {
      panNumber: '',
      panType: 'individual',
      businessName: '',
      entityType: '',
      dobOfCorporation: '',
      certificateUrl: ''
    }
    let key = 'pan'
    let complianceId = this.props.complianceId;
    if (this.props.complianceId) {
      if (this.props.storeComplianceDetails) {
        if (this.props.storeComplianceDetails.get(this.props.type)) {
          objVal = this.props.storeComplianceDetails.get(this.props.type).toJS();
          key = `${key}_${this.props.complianceId}`;
        }
      }
    }
    this.panType = objVal.panType;
    this.entityType = objVal.entityType;

    return (
      <><div className="profile-form">
        <TextField
          style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_1`}
          label="PAN Number"
          inputRef={ref => this.panNum = ref}
          error={this.state.form.panNum.error.isError}
          helperText={this.state.form.panNum.error.message}
          inputProps={{
            defaultValue: objVal.panNumber
          }}
        />
        <TextField
          style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_2`}
          label="Confirm PAN Number"
          inputRef={ref => this.confirmPanNum = ref}
          error={this.state.form.confirmPanNum.error.isError}
          helperText={this.state.form.confirmPanNum.error.message}
          inputProps={{
            defaultValue: objVal.panNumber
          }}
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
          label="Business/Legal name as per PAN Card"
          inputRef={ref => this.businessName = ref}
          error={this.state.form.businessName.error.isError}
          helperText={this.state.form.businessName.error.message}
          inputProps={{
            defaultValue: objVal.businessName
          }}
        />
        <PanTypeInput key={`${key}_4`} form={this.state.form} entityType={this.entityType} type={'pan'} panType={this.panType} onDrpDwnChange={this.onDrpDwnChange} />
        <DatePickerCustom key={`${key}_5`} date={new Date()} onDateChange={(val) => this.dobOfCorporation = { value: val }} />

        <CustomFileUpload ref={ref => this.fileUploadComp = ref} name={'PAN Certificate'} id={complianceId} url={objVal.certificateUrl} />
        <div className="text-center mt-20px">
          <Button variant="contained" color="primary" disableElevation onClick={() => this.submitForm()}>Submit</Button>
        </div>
      </div>
      </>
    )
  }
}
