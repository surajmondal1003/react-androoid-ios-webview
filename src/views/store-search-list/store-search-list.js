import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import qs from 'qs';
import StoreListItem from '../../components/store-list-item/';
import noProductImg from '../../assets/img/no-porduct.svg'
import StoreListCategory from '../../containers/store-list-category';

export default class StoreSearchList extends Component {

  componentDidMount() {
    window.storeSearchOutsideFunction = this;
    if (this.props.location.search) {
      const via = 'search';
      let query = qs.parse(this.props.location.search.replace('?', ''))
      this.props.getStoreListFromSearch({ query, via: 'categories' });
      this.props.getStoreSearchCategoryList({ query, via });

    }
  }
  searchStores = (query, authToken) => {
    const via = 'search';
    // let query = qs.parse(queryP);
    window.localStorage.setItem('apa-2-token', authToken);
    this.props.getStoreListFromSearch({ query, via: 'categories' });
    this.props.getStoreSearchCategoryList({ query, via });

  }


  fetchData = () => {
    const query = this.props.currentQuery.toJS();
    query.from += query.size;
    this.props.getStoreListFromSearch({ query, type: 'pagination' });
  }
  fetchDataFromCategory = (catName, type) => {
    const query = this.props.currentQuery.toJS();
    if (type === 'all')
      query.categories = [];
    else
      query.categories = [catName];
    query.from = 0;
    query.size = 10;
    this.props.getStoreListFromSearch({ query });
  }


  render() {
    const storeList = this.props.storeSearchList ? this.props.storeSearchList.toJS() : null;
    const totalRecords = this.props.totalRecords;

    console.log('storeList', storeList, this.props.storeSearchList);
    return (
      <>
        <StoreListCategory search={true} fetchDataFromCategory={this.props.getStoreListFromSearch} />
        {storeList &&
          <div className="store-name" id="nearby-store">

            {
              storeList.length > 0 ?
                <InfiniteScroll
                  dataLength={storeList.length}
                  next={this.fetchData}
                  hasMore={totalRecords > storeList.length}
                  loader={<div className="list-loader p-10px mt-10px mb-10px white-bg">
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
                        return (<StoreListItem key={store.id} store={store} />)
                      })
                    }
                  </ul>
                </InfiniteScroll>

                :
                <div className="no-product no-store">
                  <img src={noProductImg} alt="noproduct" />
                  <h1>Sorry!</h1>
                  <p>No Store Found</p>
                </div>
            }
          </div>}
      </>
    )
  }
}
