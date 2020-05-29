import React, { Component } from 'react'
import { Icon } from '@material-ui/core';
import { matchPath } from 'react-router-dom';
import { history } from '../../utils/config/app_config';

export default class MapAddress extends Component {
  constructor(props){
    super(props)
    this.state = {
      editMode:false,
      address:''
    }
  }
  toggleEdit=()=>{
    this.setState({
      editMode:!this.state.editMode
    })
  }
  getAddress=()=>{
    return this.state.address;
  }
  updateAddress=(address)=>{
    this.setState({address});
  }
  render() {
    let hideBtn = true;
    const xyz = ['/create-address','/edit-address/:id'].filter(path => {
        if (matchPath(history.location.pathname, { path })) { hideBtn = false; return true }
      });
    return (
      <div className="selected-locate">
        <Icon>pin_drop</Icon>
        <textarea ref={ref=>this.mapText=ref} value={this.state.address} disabled={!this.state.editMode} onChange={(e)=>this.updateAddress(e.target.value)}></textarea>
        {!hideBtn && <button onClick={()=>this.toggleEdit()}>Edit</button>}
      </div>
    )
  }
}
