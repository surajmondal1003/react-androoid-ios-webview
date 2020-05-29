import React, { Component } from 'react'
import { AppBar, Toolbar, Icon, IconButton, Typography } from '@material-ui/core';
import { history } from '../../utils/config/app_config';

export default class NextDoorhub extends Component {
  render() {
    return (
      <>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton edge="start" aria-label="menu" onClick={() => {
              console.log('go back')
              if (window.TestAndroid) {
                window.TestAndroid.goBackToApa(true)
              }
              if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
                window.webkit.messageHandlers.goBackToApa.postMessage(true);
              }
            }
            }>
              <Icon>arrow_back</Icon>
            </IconButton>
            <Typography className="main-header">Nextdoorhub</Typography>
          </Toolbar>
        </AppBar>
        <iframe src="https://nextdoorhub.biz" style={{ border: 'none', width: "100%", height: "90vh" }} />
      </>
    )
  }
}
