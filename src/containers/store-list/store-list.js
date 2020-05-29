import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import StoreListItem from '../../components/store-list-item/';
import notfoundImg from '../../assets/img/not-found.svg';
import Button from '@material-ui/core/Button';
import StoreListCategory from '../store-list-category';
import noStoreImg from '../../assets/img/no_store.svg'
import { IconButton, Icon, Popover, Fab, AppBar, Toolbar, Dialog, Typography } from '@material-ui/core';
import { Paper, InputBase } from '@material-ui/core';
import DemoStoreList from '../../components/demo-store-list';
import { history } from '../../utils/config/app_config';


// import StoreListItem from '../../components/store-list-item/';

export default class StoreList extends Component {
  fetchData = () => {
    const query = this.props.currentQuery.toJS();
    query.from += query.size;
    this.props.getStoreListFromZone({ query, type: 'pagination' });
  }

  fetchDataFromCategory = (catName, type) => {
    const query = this.props.currentQuery.toJS();
    if (type === 'all')
      query.categories = [];
    else
      query.categories = [catName];
    query.from = 0;
    query.size = 10;
    this.props.getStoreListFromZone({ query, via: 'category_filter' });
  }


  openNativeSearchBar() {
    // console.log(location);
    if (window.TestAndroid) {
      window.TestAndroid.openNativeSearchBar(true)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.openNativeSearchBar) {
      window.webkit.messageHandlers.openNativeSearchBar.postMessage(true);
    }
  }

  


    render() {
      const storeListType = this.props.storeListType;
      const favoriteStoreList = [];
      const storeList = this.props.storeList ? this.props.storeList.toJS() : null;
      const totalRecords = this.props.totalRecords;
      const requestType = this.props.requestType;
      console.log('requestType', requestType)
      let showStoreList = true;
      if (storeList) {
        if (requestType == 'initial' && !storeList.length)
          showStoreList = false;
      }
      return (
        <>
          {
            storeList &&
            <div className="store-name" id="nearby-store">
              <div className="beta-version">
                This is BETA version. Data will be removed before final release.
              </div>
              {
                showStoreList ?
                  <>
                    <div className="search-store-product search-store-list" onClick={() => this.openNativeSearchBar()}>
                      <Paper>
                        <IconButton disabled aria-label="menu">
                          <Icon>search</Icon>
                        </IconButton>
                        <InputBase
                          placeholder="Search store"
                        />
                      </Paper>
                    </div>
                    <StoreListCategory fetchDataFromCategory={this.props.getStoreListFromZone} />
                    <div className="store-list-head">
                      {
                        totalRecords ?
                          <h5>{totalRecords} Stores found near you</h5>
                          :
                          <h5>No Stores found</h5>
                      }
                      {/* <Button
                    className="sort-by-btn"
                    startIcon={<Icon>sort</Icon>}
                  >
                    Sort By
                  </Button>                */}
                    </div>
                    <InfiniteScroll
                      dataLength={storeList.length}
                      next={this.fetchData}
                      hasMore={totalRecords > storeList.length}
                      loader={<div className="list-loader p-10px mt-15px white-bg">
                        <div className="shine box"></div>
                        <div className="div">
                          <div className="shine lines"></div>
                          <div className="shine lines"></div>
                          <div className="shine lines"></div>
                        </div>
                      </div>}
                      scrollableTarget="product-grid"
                    >
  
                      <ul>
                        {
                          storeList.map(store => {
                            return (<StoreListItem key={store._source.storeId} store={store} />)
                          })
                        }
                      </ul>
                    </InfiniteScroll>
                  </>
  
                  :
                  <>
                    <div className="not-store-found d-flex align-center">
                      <div>
                        <img src={noStoreImg} alt="not-found" />
                      </div>
                      <div className="no-store-text">
                        <h4>Sorry, no stores near you yet!</h4>
                        <p>Now you can help stores in your area to register on NextDoorHub.</p>
                        <p>Help your community to benefit. <span onClick={() => history.push(
                        {
                          pathname: 'refer-store',
                          state: {
                            fromWeb: true
                          }
                        })}>Know how?</span></p>
                        {/* <div className="add-store">
                          <Button variant="outlined" color="primary" >Refer a Store</Button>
                        </div> */}
                      </div>
                      {/* <div className="learn-more">
                      <Button>Learn More</Button>
                    </div> */}
                    </div>
  
                    <div className="demo-store">
                      <h4>When stores are available, it will look like this</h4>
                      <p>These are demo stores that will automatically disappear after stores in your locality start selling on NextDoorHub. </p>
                    </div>
                    <DemoStoreList query={this.props.currentQuery.toJS()} />
                    
                  </>
  
              }
            </div>
          }
        </>
      )
    }



  
}
