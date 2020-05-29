import React, { Component } from 'react'
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CustomFileUpload from '../custom-file-upload'
import DatePickerCustom from '../date-picker';

export default class FssaiForm extends Component {
  constructor(props) {
    super(props);
    this.currTime = new Date().getTime();
    this.validUpto = { value: new Date() }
    this.state = {
      form: {
        liscense: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation'],
          validation: '^[0-9]{14}$'
        },
        name: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        address1: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        address2: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        city: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        stateName: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        pincode: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation'],
          validation: '^[0-9]{6}$'
        },
        ownerName: {
          error: {
            isError: false,
            message: ''
          }
          // checkParams: ['required'],
        },
        ownerContactNumber: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['regexValidation'],
          validation: '^[0-9]{10}$'
        }
      }
    }
  }
  componentDidMount() {
    if (this.props.fieldVal.complianceId)
      this.props.getComplianceDetails({ complianceId: this.props.fieldVal.complianceId, type: this.props.fieldVal.complianceType })

  }
  onSubmit = async (objVal) => {
    let { certificate, isError } = this.fileUploadComp.getFile();
    let tempState = this.state.form;
    let checkObj = {};
    Object.keys(objVal).forEach(x => {
      if (this[x]) {
        objVal[x] = this[x].value;
        checkObj[x] = objVal[x];
      }
    });
    delete checkObj['ownerName'];
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
      let imgName = `${objVal.name.split(' ')[0]}_${this.currTime}`;
      let certificateUrl = await this.fileUploadComp.uploadFile(imgName);
      if (certificateUrl) {
        let tempPayload = { ...objVal, validUpto: this.validUpto.value, certificateUrl };
        let payload = { "storeId": this.props.storeId, "country": "IND", "complianceType": "FSSAI", "data": JSON.stringify(tempPayload), "label": objVal.liscense }
        if (this.props.fieldVal.complianceId) {
          payload.id = this.props.fieldVal.complianceId
        }
        console.log('com_payload', payload)
        this.props.submitStoreComplianceForm({ data: payload, type: "FSSAI" });
        this.props.closeDialog()
      } else {
        this.props.updateFullScreenLoaderState(false);

      }
    }
    this.setState({ form: tempState });
  }
  render() {
    let objVal = { liscense: '', name: '', address1: '', address2: '', city: '', stateName: '', pincode: '', ownerName: '', ownerContactNumber: '', certificateUrl: '', fileObj: null }
    let key = 'fssai'
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
    return (
      <>
        <div className="fssai">
          {/* <div className="already-apply">
            <p>Already applied but haven't received certificate yet ?</p>
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="outlined" color="primary" component="span">
                Upload Application Receipt
              </Button>
            </label>
          </div> */}
          <h5 className="heading">FSSAI License Details</h5>

          <div className="store-profile-list">
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="License Number"
              key={`${key}_0`}
              inputRef={ref => this.liscense = ref}
              error={this.state.form.liscense.error.isError}
              helperText={this.state.form.liscense.error.message}
              inputProps={{ defaultValue: objVal.liscense }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="Authorised Name"
              key={`${key}_1`}
              inputRef={ref => this.name = ref}
              error={this.state.form.name.error.isError}
              helperText={this.state.form.name.error.message}
              inputProps={{ defaultValue: objVal.name }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="Authorised Premise Address"
              key={`${key}_2`}
              inputRef={ref => this.address1 = ref}
              error={this.state.form.address1.error.isError}
              helperText={this.state.form.address1.error.message}
              inputProps={{ defaultValue: objVal.address1 }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="Address Line 2"
              key={`${key}_3`}
              inputRef={ref => this.address2 = ref}
              error={this.state.form.address2.error.isError}
              helperText={this.state.form.address2.error.message}
              inputProps={{ defaultValue: objVal.address2 }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="City"
              key={`${key}_4`}
              inputRef={ref => this.city = ref}
              error={this.state.form.city.error.isError}
              helperText={this.state.form.city.error.message}
              inputProps={{ defaultValue: objVal.city }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="State"
              key={`${key}_5`}
              inputRef={ref => this.stateName = ref}
              error={this.state.form.stateName.error.isError}
              helperText={this.state.form.stateName.error.message}
              inputProps={{ defaultValue: objVal.stateName }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="Pin Code"
              key={`${key}_6`}
              inputRef={ref => this.pincode = ref}
              error={this.state.form.pincode.error.isError}
              helperText={this.state.form.pincode.error.message}
              inputProps={{ defaultValue: objVal.pincode }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              label="Owner Name"
              key={`${key}_7`}
              inputRef={ref => this.ownerName = ref}
              error={this.state.form.ownerName.error.isError}
              helperText={this.state.form.ownerName.error.message}
              inputProps={{ defaultValue: objVal.ownerName }}
            />
            <TextField
              style={{ margin: '0 0 20px 0' }}
              fullWidth
              type="number"
              label="Owner Contact Number"
              key={`${key}_8`}
              inputRef={ref => this.ownerContactNumber = ref}
              error={this.state.form.ownerContactNumber.error.isError}
              helperText={this.state.form.ownerContactNumber.error.message}
              inputProps={{ defaultValue: objVal.ownerContactNumber }}
            />
            <DatePickerCustom key={`${key}_9`} date={this.validUpto.value} onDateChange={(val) => this.validUpto = { value: val }} />
            <CustomFileUpload key={`${key}_10`} ref={ref => this.fileUploadComp = ref} id={complianceId} url={objVal.certificateUrl} fileObj={objVal.fileObj} name={'FSSAI Certificate'} />
            <div className="text-center mt-20px">
              <Button variant="contained" color="primary" disableElevation onClick={() => this.onSubmit(objVal)}>
                Submit
            </Button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
