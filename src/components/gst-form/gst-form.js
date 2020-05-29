import React, { Component } from 'react'
import { IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core';
import CustomFileUpload from '../custom-file-upload';
import verifiedImg from '../../assets/img/verified.svg'

export default class GstForm extends Component {
  constructor(props) {
    super(props);
    this.currTime = new Date().getTime();
    this.taxStructureConfirm = { value: 'yes' }
    this.state = {
      form: {
        //27AAPFU0939F1ZV
        gstNum: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation'],
          validation: '^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$',
        },
        confirmGstNum: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation', 'confirmCheck'],
          validation: '^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$',
          confirmCheck: { fieldName: 'gstNum', message: 'GstNum doesnt match' }
        },
        businessName: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        taxStructureConfirm: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
      }
    }
  }
  componentDidMount() {
    if (this.props.fieldVal.complianceId)
      this.props.getComplianceDetails({ complianceId: this.props.fieldVal.complianceId, type: this.props.fieldVal.complianceType })

  }
  submitForm = async () => {
    let { certificate, isError } = this.fileUploadComp.getFile();
    const gstNum = this.gstNum.value;
    const confirmGstNum = this.confirmGstNum.value;
    const businessName = this.businessName.value;
    const taxStructureConfirm = this.taxStructureConfirm.value;
    const tempState = this.state.form;
    const checkObj = {
      gstNum,
      confirmGstNum,
      businessName,
      taxStructureConfirm
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
      let certificateUrl = await this.fileUploadComp.uploadFile(imgName);
      if (certificateUrl) {
        const tempPayload = {
          gstNum,
          businessName,
          taxStructureConfirm,
          certificateUrl,

        }
        let payload = { "storeId": this.props.storeId, "country": "IND", "complianceType": "GST", "data": JSON.stringify(tempPayload), "label": gstNum }
        if (this.props.fieldVal.complianceId) {
          payload.id = this.props.fieldVal.complianceId
        }
        console.log('com_payload', payload)
        this.props.submitStoreComplianceForm({ data: payload, type: 'GST' });
        this.props.closeDialog();
      } else {
        this.props.updateFullScreenLoaderState(false);
      }
    }
    this.setState({ form: tempState });
  }
  render() {
    let objVal = { gstNum: '', businessName: '', certificateUrl: 'https://nextdoorhub.imgix.net/asset/image/College_More_Address_1587743893981.jpeg', taxStructureConfirm: 'yes', fileObj: null }
    let key = 'gst'
    let { complianceId, complianceType } = this.props.fieldVal;
    if (complianceId) {
      if (this.props.storeComplianceDetails) {
        if (this.props.storeComplianceDetails.get(complianceType)) {
          let redData = this.props.storeComplianceDetails.get(complianceType).toJS()
          objVal = redData.data
          key = `${key}_${complianceId}`;
          console.log('redData', redData)
        }
      }
    }
    this.taxStructureConfirm = { value: objVal.taxStructureConfirm };
    return (
      <><div className="profile-form">
        <TextField
          style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_0`}
          label="GSTIN Number"
          inputRef={ref => this.gstNum = ref}
          error={this.state.form.gstNum.error.isError}
          helperText={this.state.form.gstNum.error.message}
          inputProps={{ defaultValue: objVal.gstNum }}
        />
        <TextField
          style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_1`}
          label="Confirm GSTIN Number"
          inputRef={ref => this.confirmGstNum = ref}
          // InputProps={{
          //   endAdornment:
          //     <InputAdornment position="end">
          //       <InputAdornment position="end">
          //         <img src={verifiedImg} alt="verified" />
          //       </InputAdornment>
          //     </InputAdornment>
          // }}
          inputProps={{ defaultValue: objVal.gstNum }}
          error={this.state.form.confirmGstNum.error.isError}
          helperText={this.state.form.confirmGstNum.error.message}
        />
        <TextField style={{ margin: '0 0 20px 0' }}
          fullWidth
          key={`${key}_2`}
          label="Business/Legal name as per GST Certificate"
          inputRef={ref => this.businessName = ref}
          inputProps={{ defaultValue: objVal.businessName }}
          error={this.state.form.businessName.error.isError}
          helperText={this.state.form.businessName.error.message}
        />
        <FormControl component="fieldset" key={`${key}_3`} style={{ margin: '0 0 20px 0' }} error={this.state.form.taxStructureConfirm.error.isError} onChange={(e) => this.taxStructureConfirm = { value: e.target.value }}>
          <FormLabel component="legend">I operate with composit tax structure under GST</FormLabel>
          <RadioGroup row aria-label="taxStructureConfirm" name="taxStructureConfirm" defaultValue={this.taxStructureConfirm.value} >
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
          </RadioGroup>
          {this.state.form.taxStructureConfirm.error.isError && <FormHelperText>{this.state.form.taxStructureConfirm.error.message}</FormHelperText>}
        </FormControl>
        <CustomFileUpload key={`${key}4`} ref={ref => this.fileUploadComp = ref} id={complianceId} url={objVal.certificateUrl} fileObj={objVal.fileObj} name={'GST Certificate'} />
        <div className="text-center mt-20px">
          <Button variant="contained" color="primary" disableElevation onClick={() => this.submitForm()}>Submit</Button>
        </div>
      </div>
      </>
    )
  }
}
