import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'table', width: '100%' }}>
          <div style={{ display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' }}>
            <img src="https://nextdoorhub.imgix.net/web-banner-3.0/opps.svg" style={{ height: '75vh' }} />
            <h3>Something went wrong</h3>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

