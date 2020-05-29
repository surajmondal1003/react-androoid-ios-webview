import React, { Component } from 'react'
import StoreListItem from '../store-list-item';

export default class DemoStoreList extends Component {
  componentDidMount() {
    this.props.getDemoStoreList({ query: this.props.query });
  }
  render() {
    let storeList = this.props.demoStoreList ? this.props.demoStoreList.toJS() : null;
    return (
      <>
        {
          storeList &&
          <ul>
            {
              storeList.map(store => {
                return (<StoreListItem key={store._source.storeId} store={store} />)
              })
            }
          </ul>
        }
      </>
    )
  }
}
