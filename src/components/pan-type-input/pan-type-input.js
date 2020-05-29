import React, { Component, useRef } from 'react'
import { FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, FormHelperText, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class PanTypeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEntity: false
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.panType == 'entity') {
      if (!state.showEntity) {
        return ({ showEntity: true })
      } else
        return null
    } else
      return null
  }
  onChange = (e) => {
    if ((e.target.name) == 'panType' || (e.target.name) == 'certificateType') {
      if (e.target.value == 'entity') {
        this.setState({ showEntity: true });
      } else {
        this.setState({ showEntity: false });

      }
    }
    this.props.onDrpDwnChange(e);
  }
  getView = () => {
    switch (this.props.type) {
      case 'certificate':
        return (
          <FormControl component="fieldset" style={{ margin: '0 0 20px 0' }} error={this.props.form.certificateType.error.isError} onChange={this.onChange}>
            <FormLabel component="legend">Certifcate issued to indiviual of entity</FormLabel>
            <RadioGroup row aria-label="panType" name="certificateType" value={this.state.showEntity ? 'entity' : 'individual'}>
              <FormControlLabel value="individual" control={<Radio color="primary" />} label="Individual" />
              <FormControlLabel value="entity" control={<Radio color="primary" />} label="Entity" />
            </RadioGroup>
            {this.props.form.certificateType.error.isError && <FormHelperText>{this.props.form.certificateType.error.message}</FormHelperText>}
          </FormControl>
        )
      case 'pan':
        return (
          <FormControl component="fieldset" style={{ margin: '0 0 20px 0' }} error={this.props.form.panType.error.isError} onChange={this.onChange}>
            <FormLabel component="legend">Pan number issued to indiviual of entity</FormLabel>
            <RadioGroup row aria-label="panType" name="panType" value={this.state.showEntity ? 'entity' : 'individual'}>
              <FormControlLabel value="individual" control={<Radio color="primary" />} label="Individual" />
              <FormControlLabel value="entity" control={<Radio color="primary" />} label="Entity" />
            </RadioGroup>
            {this.props.form.panType.error.isError && <FormHelperText>{this.props.form.panType.error.message}</FormHelperText>}
          </FormControl>
        )
    }
  }
  render() {
    console.log('formType', this.props.form)

    // if(this.props.panType=='entity')
    return (
      <>
        {
          this.getView()
        }
        {
          this.state.showEntity &&
          <Asynchronous form={this.props.form} panEntityTypeList={[]} onChange={(e, newValue) => this.onChange({ target: { name: 'entityType', value: newValue } })} entityType={this.props.entityType} />
        }
      </>
    )
  }
}
function Asynchronous(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const searchInput = useRef(null)

  React.useEffect(() => {
    if (props.panEntityTypeList.length) {
      setLoading(false)
      setOptions(props.panEntityTypeList);
    } else {
      setLoading(false)
      setOptions([]);
    }
    let active = true;

    if (!loading) {
      return undefined;
    }

    return () => {
      active = false;
    };
  }, [props.panEntityTypeList]);

  // React.useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  // const onSearch = (e) => {
  //   const value = searchInput.current.value.trim();
  //   if (e && ![38, 18, 40, 39, 37, 13].includes(e.keyCode)) {
  //     if (value.length >= 1) {
  //       options.map(x => x.sellerCatagoryName.toLowerCase().includes(x.toLowerCase()));
  //       // props.getProductCategories({ storeId: props.storeId, query: value });
  //       setLoading(true);
  //     }
  //   }
  // }
  return (

    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      style={{ margin: '0 0 20px 0' }}
      onChange={props.onChange}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.sellerCatagoryName}
      options={options}
      loading={loading}
      // onInputChange={onSearch}
      defaultValue={props.entityType}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Private Limited Company"
          // onKeyUp={(e) => onSearch(e)}
          inputRef={searchInput}
          error={props.form.entityType.error.isError}
          helperText={props.form.entityType.error.message}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
