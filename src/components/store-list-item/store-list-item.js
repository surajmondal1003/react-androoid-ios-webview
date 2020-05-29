import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { IconButton, Icon, Popover, Fab, AppBar, Toolbar, Dialog, Typography } from '@material-ui/core';
import { Paper, InputBase } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import verifiedImg from '../../assets/img/verified.svg'
import Rating from '@material-ui/lab/Rating';
import { replaceUrl } from '../../utils/miscellaneous/imgLib';
import distanceImg from '../../assets/img/distance.svg';
import deliveryImg from '../../assets/img/delivery-bike.svg';


export default class StoreListItem extends Component {
  constructor(props) {
    super(props);
  }
  callMobileDevices = (storeId) => {
    console.log(storeId);
    if (window.TestAndroid) {
      window.TestAndroid.onSellerListItemClick(storeId)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.getStoreId) {
      window.webkit.messageHandlers.getStoreId.postMessage(storeId);
    }
  }
  openNativeMap(location) {
    console.log(location);
    if (window.TestAndroid) {
      window.TestAndroid.onStoreLocationClick(location.lat, location.lon)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.getStoreLocationOnMap) {
      window.webkit.messageHandlers.getStoreLocationOnMap.postMessage(location);
    }
  }

  getDeliveryValue = (store) => {
    let text = 'Does not deliver to your location';
    if (store._source.store_local_listing_range) {
    let listRange = Number(store._source.store_local_listing_range)
    if (listRange > 0) {
    if (Number(store.fields.distance[0]) <= listRange)
    text = 'Delivery availaible';
    }else{
    text = 'Delivery Not availaible';
    }
    }
    return text;
    }

  render() {
    const { store } = this.props;
    return (
      <>

        <li className={store._source.is_live ? '' : 'store-disable'}>
          {/* {!store._source.is_live && <span className="store-closed">Store is currently closed</span>} */}
          <div className="store-details" onClick={() => this.callMobileDevices(store._source.storeId)}>
            <div className="store-logo">
              <img src={replaceUrl(store._source.store_logo_url, 'store')} alt="logo" />
            </div>
            <div className="store-name-loc">
              <div className="store-name-fav">
                <div className="store-details-loc">
                  <h2>
                    <b>{store._source.store_display_name}</b>

                    {/* {store._source.store_type == 'PRIVATE' ?
                      <Icon>lock</Icon>
                      :
                      <span className="verified"><img src={verifiedImg} alt="verified" /></span>
                    } */}
                  </h2>
                  <p>{store._source.shortAddress}</p>

                </div>
                {/* className="fav-button" */}
                {/* <IconButton>
                  <Icon>favorite</Icon>
                </IconButton> */}
              </div>
              {/* {store.store_rating && <div className="store-rating">{store.store_rating}★</div>} */}
              <div className="main-category">{store._source.businessCategoryName}</div>
              <div className="store-pick-home-delivery">
                {store._source.store_pickup ?
                  <p><Icon>store</Icon> Store Pickup available</p>
                  :
                  <p><Icon>store</Icon> Store Pickup not available</p>
                }
                {/* { Number(store.fields.distance[0] */}
                
                  <p><img src={deliveryImg} />{this.getDeliveryValue(store)}</p>
                  
              </div>
            </div>
          </div>
          {/* {store._source.store_category &&
            <div className="store-category">
              {
                store._source.store_category.map(x => <span key={x.id}>{x.name}</span>)
              }
            </div>
          } */}
          <div className="store-distance">
            <div className="store-list-rating">
              <Rating
                readOnly
                name="customized-empty"
                defaultValue={Number(store._source.store_rating)}
                precision={1}
                emptyIcon={<Icon>star_border</Icon>}
              />
            </div>
            <Button
              className="near-me"
              startIcon={<img className="distance-img" src={distanceImg}/>}
              onClick={() => this.openNativeMap(store._source.location)}
            >
              {parseFloat(store.fields.distance[0] / 1000).toFixed(2)} Km
                </Button>
            {/* <AvatarGroup max={2}>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
              <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            </AvatarGroup> */}
          </div>
        </li>
      </>
    )
  }
}
