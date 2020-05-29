import React, { Component } from 'react'
import { Icon, Button } from '@material-ui/core';
import StoreSearch from '../../containers/store-search/';
import RecentSearch from '../../containers/recent-search/';
import HotCategories from '../../containers/hot-categories';

export default class Nearby extends Component {
  render() {
    return (
      <>
        <StoreSearch />
        <div className="search-category">
          <RecentSearch />
          <HotCategories />

        </div>

      </>
    )
  }
}
